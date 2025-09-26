import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Scale, 
  ChevronDown, 
  ChevronUp,
  FileText, 
  Clock, 
  AlertTriangle, 
  Shield,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Users,
  Gavel,
  Book,
  Calculator
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/bus-legal-guidance-hero.jpg';

const BusAccidentLegalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const guidanceSections = [
    {
      id: 'immediate-steps',
      title: 'Immediate Steps After a Bus Accident',
      icon: AlertTriangle,
      color: 'red',
      priority: 'Critical - First 24 Hours',
      content: [
        {
          step: 'Seek Medical Attention',
          description: 'Even if you feel fine, get evaluated immediately. Bus accident injuries often have delayed symptoms, and prompt medical documentation strengthens your case significantly.',
          tips: ['Go to emergency room if seriously injured', 'See a doctor within 24-48 hours even for minor injuries', 'Keep all medical records and bills', 'Follow all treatment recommendations']
        },
        {
          step: 'Document Everything',
          description: 'Evidence disappears quickly, especially video surveillance which is often deleted within 72 hours.',
          tips: ['Take photos of the scene, bus, your injuries', 'Get contact info from witnesses and other passengers', 'Note weather and road conditions', 'Get the bus number and route information', 'Request police report number']
        },
        {
          step: 'Contact an Attorney Immediately',
          description: 'The 6-month government claim deadline is strict and unforgiving. Early attorney involvement is crucial for preserving evidence and meeting deadlines.',
          tips: ['Call within 24 hours if possible', 'Don\'t wait to see how you feel', 'Free consultations available', 'Attorney can handle insurance communications']
        }
      ]
    },
    {
      id: 'government-claims',
      title: 'Government Claim Process',
      icon: Gavel,
      color: 'blue',
      priority: 'Urgent - 6 Month Deadline',
      content: [
        {
          step: 'Identify the Government Entity',
          description: 'Determine which government agency operated the bus: MTA/Metro, school district, city transit, county transportation, or federal agencies.',
          tips: ['MTA buses in Los Angeles County', 'School districts for school buses', 'City transportation departments', 'Federal agencies for some interstate buses']
        },
        {
          step: 'File Government Claim Form',
          description: 'Must be filed within 6 months of the accident date. This is a prerequisite to filing a lawsuit against government entities.',
          tips: ['Use official government claim form', 'Include all required information', 'Serve on correct government entity', 'Keep proof of service', 'No extensions available except in rare circumstances']
        },
        {
          step: 'Wait for Response',
          description: 'Government has 45 days to respond to your claim. They can approve, deny, or remain silent (which equals denial).',
          tips: ['Approval is rare but possible', 'Denial allows lawsuit filing', 'Silence after 45 days = denial', 'You then have 6 months to file lawsuit']
        }
      ]
    },
    {
      id: 'liability-determination',
      title: 'Determining Liability in Bus Accidents',
      icon: Scale,
      color: 'green',
      priority: 'Essential for Case Success',
      content: [
        {
          step: 'Bus Driver Liability',
          description: 'Bus drivers must exercise the "highest degree of care" under California\'s common carrier law, making them liable for even slight negligence.',
          tips: ['Distracted driving (phones, eating)', 'Fatigued driving or falling asleep', 'Speeding or reckless driving', 'Failing to secure wheelchairs', 'Improper lane changes or turns']
        },
        {
          step: 'Bus Company Liability',
          description: 'Companies are responsible for hiring qualified drivers, maintaining vehicles, and following safety regulations.',
          tips: ['Negligent hiring or inadequate training', 'Poor vehicle maintenance', 'Defective equipment or parts', 'Violating federal/state regulations', 'Inadequate supervision']
        },
        {
          step: 'Government Entity Liability',
          description: 'Government agencies can be liable despite some immunities, particularly for dangerous conditions and operational negligence.',
          tips: ['Dangerous road conditions at bus stops', 'Inadequate bus stop design', 'Poor route planning', 'Operational negligence', 'Failure to maintain safe conditions']
        },
        {
          step: 'Third Party Liability',
          description: 'Other parties may share responsibility depending on accident circumstances.',
          tips: ['Other drivers who caused collision', 'Maintenance contractors', 'Parts manufacturers', 'Property owners (dangerous conditions)', 'Construction companies']
        }
      ]
    },
    {
      id: 'compensation-types',
      title: 'Types of Compensation Available',
      icon: FileText,
      color: 'purple',
      priority: 'Understanding Your Rights',
      content: [
        {
          step: 'Economic Damages',
          description: 'Quantifiable financial losses with documentation and receipts.',
          tips: ['Medical expenses (past and future)', 'Lost wages and reduced earning capacity', 'Property damage (belongings destroyed)', 'Transportation costs for medical care', 'Home modifications for disabilities']
        },
        {
          step: 'Non-Economic Damages',
          description: 'Subjective losses that significantly impact quality of life.',
          tips: ['Physical pain and suffering', 'Emotional distress and mental anguish', 'Loss of enjoyment of life', 'Disability and disfigurement', 'Loss of consortium (for spouses)']
        },
        {
          step: 'Punitive Damages',
          description: 'Awarded in cases of extreme negligence or intentional misconduct (rare against government entities).',
          tips: ['DUI bus drivers', 'Extreme recklessness', 'Cover-ups or evidence destruction', 'Pattern of dangerous behavior', 'Generally not available against government']
        }
      ]
    },
    {
      id: 'special-circumstances',
      title: 'Special Circumstances',
      icon: Users,
      color: 'orange',
      priority: 'Case-Specific Considerations',
      content: [
        {
          step: 'School Bus Accidents',
          description: 'Special protections for children and unique legal considerations for school district liability.',
          tips: ['Enhanced duty of care to children', 'Parental claims for loss of consortium', 'No contributory negligence for young children', 'Extended time limits in some cases', 'Special government immunities']
        },
        {
          step: 'Disability Access Issues',
          description: 'ADA violations can strengthen bus accident claims significantly.',
          tips: ['Wheelchair lift malfunctions', 'Failure to secure wheelchairs properly', 'Inadequate assistance boarding/exiting', 'Discrimination affecting safety', 'Inaccessible emergency exits']
        },
        {
          step: 'Multiple Victim Accidents',
          description: 'Mass casualty events require coordination and may involve insurance policy limits.',
          tips: ['Shared evidence benefits all victims', 'Policy limits may be exceeded', 'Coordination among attorneys', 'Some cases settle before others', 'Proportional distribution of funds']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="California Bus Accident Legal Guidance | Step-by-Step Process | Trembach Law Firm"
        description="Complete legal guidance for California bus accident victims. Government claims, liability determination, compensation types. Former defense attorney provides insider knowledge."
        canonical="https://www.trembachlawfirm.com/bus-accident/legal-guidance"
      />

      <GoBack />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Bus Accident Legal Guidance
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white">
            Step-by-step legal guidance from former defense attorneys who know how bus companies think
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              6-Month Deadline
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              No Win, No Fee
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white px-4 py-2">
              <Scale className="w-4 h-4 mr-2" />
              Former Defense Attorney
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Legal Guidance Content */}
          <div className="lg:col-span-3">
            
            {/* Introduction */}
            <Card className="mb-8 border-l-4 border-l-blue-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Your Complete Legal Roadmap</h2>
                <p className="text-lg mb-4">
                  Bus accident cases in California involve complex laws, strict deadlines, and powerful opponents. 
                  This guide provides insider knowledge from former defense attorneys who understand how bus 
                  companies and government entities handle claims.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-800">Time-Sensitive Information</p>
                      <p className="text-yellow-700 text-sm">
                        This guidance includes critical deadlines that cannot be missed. If your accident involved 
                        a government bus, you may have only months or even weeks remaining to protect your rights.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guidance Sections */}
            <div className="space-y-6">
              {guidanceSections.map((section, index) => (
                <Card key={section.id} className="shadow-lg">
                  <CardHeader className={`bg-${section.color}-50 border-b border-${section.color}-100`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <section.icon className={`w-6 h-6 text-${section.color}-600 mr-3`} />
                        <div>
                          <CardTitle className={`text-xl text-${section.color}-700`}>
                            {section.title}
                          </CardTitle>
                          <Badge variant="outline" className={`mt-1 text-${section.color}-600 border-${section.color}-300`}>
                            {section.priority}
                          </Badge>
                        </div>
                      </div>
                      <Badge className={`bg-${section.color}-100 text-${section.color}-700`}>
                        Step {index + 1}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <Collapsible 
                    open={expandedSections[section.id]} 
                    onOpenChange={() => toggleSection(section.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between p-6 text-left"
                      >
                        <span>Click to view detailed guidance</span>
                        {expandedSections[section.id] ? <ChevronUp /> : <ChevronDown />}
                      </Button>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className="space-y-6">
                          {section.content.map((item, itemIndex) => (
                            <div key={itemIndex} className="border-l-4 border-l-gray-200 pl-6">
                              <h4 className="text-lg font-semibold mb-2 flex items-center">
                                <CheckCircle className={`w-5 h-5 text-${section.color}-600 mr-2`} />
                                {item.step}
                              </h4>
                              <p className="text-muted-foreground mb-4">{item.description}</p>
                              
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h5 className="font-medium mb-2">Key Points:</h5>
                                <ul className="space-y-1">
                                  {item.tips.map((tip, tipIndex) => (
                                    <li key={tipIndex} className="flex items-start text-sm">
                                      <div className={`w-2 h-2 bg-${section.color}-500 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                                      {tip}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="mt-8 bg-red-50 border-l-4 border-l-red-600">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-red-700 mb-4">
                  Don't Navigate This Alone
                </h3>
                <p className="text-lg text-red-600 mb-6">
                  Bus accident cases are complex and time-sensitive. Get professional guidance 
                  from attorneys who understand both sides of these cases.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4"
                    onClick={() => window.location.href = 'tel:8559851234'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (855) 985-1234
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-4"
                    onClick={() => window.location.href = '/bus-accident/case-evaluation'}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Free Case Evaluation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Access */}
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  Quick Access Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  {guidanceSections.map((section, index) => (
                    <Button
                      key={section.id}
                      variant="ghost"
                      className="w-full justify-start text-left text-sm"
                      onClick={() => toggleSection(section.id)}
                    >
                      <section.icon className="w-4 h-4 mr-2" />
                      Step {index + 1}: {section.title}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="shadow-lg border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Time-Sensitive Case?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  If your accident was recent or involves a government bus, 
                  contact us immediately to protect your rights.
                </p>
                
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8559851234'}
                  >
                    Emergency Consultation
                  </Button>
                  
                  <div className="text-xs text-center text-muted-foreground">
                    Available 24/7 for urgent cases
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Resources */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-green-600" />
                  Additional Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/bus-accident/faq'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    50+ Bus Accident FAQs
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/bus-accident/compensation-calculator'}
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    Compensation Calculator
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/practice-areas/bus-accidents'}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Main Bus Accidents Page
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Legal Disclaimer */}
            <Card className="shadow-lg bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-yellow-700 text-sm">Legal Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-yellow-600">
                  This guidance is for informational purposes only and does not constitute legal advice. 
                  Every case is unique and requires individual evaluation. Consult with a qualified 
                  attorney for advice specific to your situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusAccidentLegalGuidance;