import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  ArrowLeft,
  BookOpen,
  Heart,
  Users,
  Clock,
  AlertTriangle,
  Phone,
  Mail,
  Shield,
  Activity,
  FileText,
  Brain,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  Info,
  HelpCircle,
  Scale,
  DollarSign
} from 'lucide-react';
import heroBackground from '@/assets/wrongful-death-medical-guidance-hero.jpg';
import SEO from '@/components/SEO';

const WrongfulDeathMedicalGuidance: React.FC = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const medicalTopics = [
    {
      id: 'understanding-grief',
      title: 'Understanding the Grief Process',
      icon: Heart,
      summary: 'Learn about the stages of grief and what to expect during this difficult time.',
      content: `
        <h3>The Five Stages of Grief</h3>
        <p>Understanding grief helps you recognize that your feelings are normal and part of the healing process:</p>
        <ul>
          <li><strong>Denial:</strong> "This can't be happening" - Initial shock and disbelief</li>
          <li><strong>Anger:</strong> Rage at the situation, others, or even the deceased</li>
          <li><strong>Bargaining:</strong> "What if..." thoughts and attempts to change reality</li>
          <li><strong>Depression:</strong> Deep sadness as reality sets in</li>
          <li><strong>Acceptance:</strong> Coming to terms with the loss</li>
        </ul>
        
        <h4>Important Notes:</h4>
        <ul>
          <li>Grief is not linear - you may experience stages multiple times or out of order</li>
          <li>Everyone grieves differently and at their own pace</li>
          <li>There's no "right" timeline for grief</li>
          <li>Complicated grief may require professional help</li>
        </ul>
        
        <h4>When to Seek Professional Help:</h4>
        <ul>
          <li>Persistent thoughts of self-harm</li>
          <li>Inability to function in daily life after several months</li>
          <li>Substance abuse as coping mechanism</li>
          <li>Severe depression or anxiety</li>
          <li>Relationship problems due to grief</li>
        </ul>
      `
    },
    {
      id: 'medical-evidence',
      title: 'Understanding Medical Evidence in Wrongful Death',
      icon: Stethoscope,
      summary: 'Key medical concepts and evidence important for wrongful death cases.',
      content: `
        <h3>Essential Medical Records</h3>
        <p>These medical documents are crucial for building a strong wrongful death case:</p>
        
        <h4>Hospital Records:</h4>
        <ul>
          <li>Admission records and patient history</li>
          <li>Nursing notes and vital sign monitoring</li>
          <li>Physician orders and progress notes</li>
          <li>Medication administration records</li>
          <li>Laboratory and diagnostic test results</li>
          <li>Surgical reports and anesthesia records</li>
          <li>Emergency department records</li>
        </ul>
        
        <h4>Autopsy and Death Investigation:</h4>
        <ul>
          <li><strong>Autopsy Report:</strong> Determines cause and manner of death</li>
          <li><strong>Toxicology Report:</strong> Tests for drugs, alcohol, poisons</li>
          <li><strong>Death Certificate:</strong> Official cause of death documentation</li>
          <li><strong>Coroner's Report:</strong> Investigative findings</li>
        </ul>
        
        <h3>Medical Causation</h3>
        <p>Proving medical causation requires establishing:</p>
        <ul>
          <li><strong>Proximate Cause:</strong> The negligent act directly caused death</li>
          <li><strong>But-For Causation:</strong> Death wouldn't have occurred "but for" the negligence</li>
          <li><strong>Foreseeability:</strong> The death was a foreseeable consequence</li>
        </ul>
        
        <h4>Expert Medical Testimony:</h4>
        <p>Medical experts help establish:</p>
        <ul>
          <li>Standard of care in the medical community</li>
          <li>How the care provided fell below standards</li>
          <li>How proper care would have prevented death</li>
          <li>Alternative treatment options that should have been considered</li>
        </ul>
      `
    },
    {
      id: 'mental-health',
      title: 'Mental Health After Sudden Loss',
      icon: Brain,
      summary: 'Managing trauma, depression, and anxiety following unexpected death.',
      content: `
        <h3>Common Mental Health Reactions</h3>
        <p>Sudden, unexpected death often triggers intense psychological responses:</p>
        
        <h4>Acute Stress Reaction:</h4>
        <ul>
          <li>Shock and disbelief</li>
          <li>Emotional numbness</li>
          <li>Difficulty concentrating</li>
          <li>Sleep disturbances</li>
          <li>Physical symptoms (headaches, nausea)</li>
        </ul>
        
        <h4>Post-Traumatic Stress (PTSD):</h4>
        <ul>
          <li>Intrusive memories or flashbacks</li>
          <li>Avoidance of reminders</li>
          <li>Hypervigilance and startle response</li>
          <li>Nightmares about the incident</li>
          <li>Emotional detachment</li>
        </ul>
        
        <h4>Complicated Grief:</h4>
        <ul>
          <li>Intense grief lasting more than 6-12 months</li>
          <li>Inability to accept the death</li>
          <li>Persistent yearning and searching</li>
          <li>Extreme avoidance of reminders</li>
          <li>Loss of meaning and purpose</li>
        </ul>
        
        <h3>Treatment Options</h3>
        <h4>Professional Therapy:</h4>
        <ul>
          <li><strong>Grief Counseling:</strong> Specialized therapy for loss</li>
          <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Addresses negative thought patterns</li>
          <li><strong>EMDR:</strong> Eye Movement Desensitization for trauma</li>
          <li><strong>Support Groups:</strong> Connect with others experiencing similar loss</li>
        </ul>
        
        <h4>Medication Management:</h4>
        <ul>
          <li>Antidepressants for persistent depression</li>
          <li>Anti-anxiety medications for acute anxiety</li>
          <li>Sleep aids for insomnia (short-term use)</li>
          <li>Always consult with psychiatrist or primary care physician</li>
        </ul>
        
        <h3>Self-Care Strategies</h3>
        <ul>
          <li>Maintain regular sleep schedule</li>
          <li>Eat nutritious meals regularly</li>
          <li>Exercise gently (walking, yoga)</li>
          <li>Stay connected with supportive friends/family</li>
          <li>Limit alcohol and avoid drugs</li>
          <li>Practice relaxation techniques</li>
          <li>Journal your thoughts and feelings</li>
        </ul>
      `
    },
    {
      id: 'children-grief',
      title: 'Helping Children Cope with Loss',
      icon: Users,
      summary: 'Supporting children through grief and understanding their unique needs.',
      content: `
        <h3>How Children Understand Death by Age</h3>
        
        <h4>Infants to 2 Years:</h4>
        <ul>
          <li>No understanding of death's permanence</li>
          <li>React to emotional atmosphere and caregiver distress</li>
          <li>May show regression in development</li>
          <li>Need consistent care and routines</li>
        </ul>
        
        <h4>Ages 3-5:</h4>
        <ul>
          <li>View death as temporary and reversible</li>
          <li>May think death is like sleep</li>
          <li>Concrete thinking - need simple, honest explanations</li>
          <li>May blame themselves for the death</li>
        </ul>
        
        <h4>Ages 6-9:</h4>
        <ul>
          <li>Beginning to understand death's permanence</li>
          <li>May personify death (as monster or skeleton)</li>
          <li>Curious about body functions and death process</li>
          <li>May fear their own death or caregiver's death</li>
        </ul>
        
        <h4>Ages 10-12:</h4>
        <ul>
          <li>Understand death is permanent and universal</li>
          <li>Can grasp biological aspects of death</li>
          <li>May have intense emotional reactions</li>
          <li>Beginning to understand implications for their future</li>
        </ul>
        
        <h4>Teenagers:</h4>
        <ul>
          <li>Adult understanding of death</li>
          <li>May struggle with meaning and fairness</li>
          <li>Increased risk-taking behavior</li>
          <li>May reject support or act overly mature</li>
        </ul>
        
        <h3>Supporting Children Through Grief</h3>
        
        <h4>Communication Guidelines:</h4>
        <ul>
          <li>Use clear, simple language</li>
          <li>Avoid euphemisms ("went to sleep," "lost")</li>
          <li>Answer questions honestly and age-appropriately</li>
          <li>Reassure them they are safe and cared for</li>
          <li>Allow them to express all emotions</li>
        </ul>
        
        <h4>Maintaining Stability:</h4>
        <ul>
          <li>Keep regular routines when possible</li>
          <li>Maintain school attendance</li>
          <li>Continue important activities and relationships</li>
          <li>Create new family traditions to honor deceased</li>
        </ul>
        
        <h4>Professional Help for Children:</h4>
        <p>Consider therapy if child shows:</p>
        <ul>
          <li>Persistent sleep problems or nightmares</li>
          <li>Significant decline in school performance</li>
          <li>Social withdrawal lasting several weeks</li>
          <li>Aggressive behavior or frequent tantrums</li>
          <li>Regression in developmental milestones</li>
          <li>Persistent physical complaints without medical cause</li>
          <li>Talk of wanting to die or join deceased</li>
        </ul>
      `
    },
    {
      id: 'practical-health',
      title: 'Practical Health Considerations',
      icon: Activity,
      summary: 'Managing your physical health during legal proceedings and grief.',
      content: `
        <h3>Physical Effects of Grief</h3>
        <p>Grief affects your body as well as your emotions. Common physical symptoms include:</p>
        
        <h4>Immediate Physical Reactions:</h4>
        <ul>
          <li>Fatigue and exhaustion</li>
          <li>Sleep disturbances</li>
          <li>Appetite changes</li>
          <li>Headaches</li>
          <li>Muscle tension and pain</li>
          <li>Nausea or stomach problems</li>
          <li>Dizziness or lightheadedness</li>
          <li>Shortness of breath</li>
        </ul>
        
        <h4>Long-term Health Impacts:</h4>
        <ul>
          <li>Weakened immune system</li>
          <li>Increased risk of heart problems</li>
          <li>Higher blood pressure</li>
          <li>Digestive issues</li>
          <li>Chronic pain conditions</li>
        </ul>
        
        <h3>Healthcare During Legal Proceedings</h3>
        
        <h4>Medical Documentation:</h4>
        <ul>
          <li>Keep records of all grief-related medical treatment</li>
          <li>Document how loss has affected your health</li>
          <li>Maintain receipts for medical expenses</li>
          <li>Track missed work due to health issues</li>
        </ul>
        
        <h4>Insurance Considerations:</h4>
        <ul>
          <li>Understand changes to health insurance coverage</li>
          <li>Review life insurance policies and beneficiaries</li>
          <li>Consider COBRA continuation coverage if needed</li>
          <li>Update medical power of attorney documents</li>
        </ul>
        
        <h3>Health Maintenance Strategies</h3>
        
        <h4>Physical Care:</h4>
        <ul>
          <li>Maintain regular medical checkups</li>
          <li>Monitor blood pressure and heart health</li>
          <li>Stay hydrated and eat regular meals</li>
          <li>Get gentle exercise (walking, swimming)</li>
          <li>Practice good sleep hygiene</li>
          <li>Limit alcohol and caffeine</li>
        </ul>
        
        <h4>Stress Management:</h4>
        <ul>
          <li>Deep breathing exercises</li>
          <li>Progressive muscle relaxation</li>
          <li>Meditation or mindfulness practices</li>
          <li>Gentle yoga or stretching</li>
          <li>Massage therapy</li>
          <li>Acupuncture</li>
        </ul>
        
        <h4>Warning Signs to Seek Immediate Care:</h4>
        <ul>
          <li>Chest pain or heart palpitations</li>
          <li>Severe headaches or vision changes</li>
          <li>Persistent nausea or vomiting</li>
          <li>Signs of severe depression</li>
          <li>Thoughts of self-harm</li>
          <li>Substance abuse</li>
        </ul>
      `
    },
    {
      id: 'autopsy-understanding',
      title: 'Understanding Autopsy Reports',
      icon: FileText,
      summary: 'What autopsy reports contain and how they impact wrongful death cases.',
      content: `
        <h3>Types of Death Investigations</h3>
        
        <h4>Coroner vs. Medical Examiner:</h4>
        <ul>
          <li><strong>Coroner:</strong> Elected official, may not be medically trained</li>
          <li><strong>Medical Examiner:</strong> Physician with forensic pathology training</li>
          <li>California uses both systems depending on county</li>
        </ul>
        
        <h4>When Autopsies Are Required:</h4>
        <ul>
          <li>Sudden, unexpected deaths</li>
          <li>Deaths within 24 hours of hospital admission</li>
          <li>Suspicious or violent deaths</li>
          <li>Workplace or public health hazard deaths</li>
          <li>Deaths during medical procedures</li>
        </ul>
        
        <h3>Autopsy Report Components</h3>
        
        <h4>External Examination:</h4>
        <ul>
          <li>Description of injuries, marks, and scars</li>
          <li>Measurements and photographs</li>
          <li>Evidence of medical treatment</li>
          <li>Identification confirmation</li>
        </ul>
        
        <h4>Internal Examination:</h4>
        <ul>
          <li>Organ weights and descriptions</li>
          <li>Evidence of disease or injury</li>
          <li>Tissue samples for microscopic examination</li>
          <li>Collection of evidence for toxicology</li>
        </ul>
        
        <h4>Microscopic Examination:</h4>
        <ul>
          <li>Cellular changes indicating disease</li>
          <li>Evidence of healing or timing of injuries</li>
          <li>Confirmation of suspected conditions</li>
        </ul>
        
        <h4>Toxicology Results:</h4>
        <ul>
          <li>Blood alcohol concentration</li>
          <li>Prescription and illegal drugs</li>
          <li>Poisons or toxic substances</li>
          <li>Carbon monoxide levels</li>
        </ul>
        
        <h3>Cause vs. Manner of Death</h3>
        
        <h4>Cause of Death:</h4>
        <ul>
          <li>The injury or disease that directly caused death</li>
          <li>Example: "Blunt force trauma to head"</li>
          <li>Must be medically determinable</li>
        </ul>
        
        <h4>Manner of Death:</h4>
        <ul>
          <li><strong>Natural:</strong> Disease or natural process</li>
          <li><strong>Accident:</strong> Unintentional injury</li>
          <li><strong>Suicide:</strong> Intentional self-harm</li>
          <li><strong>Homicide:</strong> Death at hands of another</li>
          <li><strong>Undetermined:</strong> Insufficient evidence</li>
        </ul>
        
        <h3>Legal Significance</h3>
        
        <h4>For Wrongful Death Cases:</h4>
        <ul>
          <li>Establishes medical causation</li>
          <li>Rules out natural causes</li>
          <li>Provides timeline of death</li>
          <li>Documents suffering before death</li>
          <li>Identifies contributing factors</li>
        </ul>
        
        <h4>Limitations of Autopsy:</h4>
        <ul>
          <li>May not determine exact sequence of events</li>
          <li>Cannot always determine intent</li>
          <li>Quality depends on pathologist's skill</li>
          <li>Some conditions are difficult to diagnose post-mortem</li>
        </ul>
        
        <h3>Obtaining and Understanding Reports</h3>
        
        <h4>How to Obtain Autopsy Reports:</h4>
        <ul>
          <li>Contact the coroner's or medical examiner's office</li>
          <li>May require proof of relationship to deceased</li>
          <li>Usually available 6-8 weeks after death</li>
          <li>May involve fees for copies</li>
        </ul>
        
        <h4>Getting Expert Review:</h4>
        <ul>
          <li>Independent forensic pathologist review</li>
          <li>Second opinion on cause and manner</li>
          <li>Expert interpretation for legal proceedings</li>
          <li>Translation of medical terms for family</li>
        </ul>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Wrongful Death Medical Guidance | Understanding Loss & Legal Process | California"
        description="Comprehensive medical guidance for wrongful death cases. Understanding grief, medical evidence, and health during legal proceedings. Expert support for California families."
        canonical="/wrongful-death-medical-guidance"
      />

      

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium">
              Medical Guidance & Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Wrongful Death Medical Guidance
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Comprehensive medical and health guidance for families navigating wrongful death cases. Understanding grief, medical evidence, and caring for yourself during legal proceedings.
            </p>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Compassionate Care</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Confidential Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Introduction */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-red-600" />
                    Understanding Your Journey
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-4">
                    Losing a loved one to wrongful death creates overwhelming emotional, physical, and legal challenges. 
                    This comprehensive medical guidance helps you understand the grief process, navigate medical evidence, 
                    and maintain your health while pursuing justice.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our experienced team combines legal expertise with compassionate understanding of the medical and 
                    emotional aspects of wrongful death cases. We're here to support you through every step of this 
                    difficult journey.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Important Note
                    </h3>
                    <p className="text-blue-800">
                      This guidance is for educational purposes and should not replace professional medical or mental health care. 
                      Always consult with qualified healthcare providers for personal medical advice and treatment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Topics */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Medical & Health Topics</h2>
                
                {medicalTopics.map((topic) => {
                  const IconComponent = topic.icon;
                  return (
                    <Card key={topic.id} className="shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
                          <div className="bg-red-100 p-2 rounded-lg">
                            <IconComponent className="w-6 h-6 text-red-600" />
                          </div>
                          {topic.title}
                        </CardTitle>
                        <p className="text-gray-600">{topic.summary}</p>
                      </CardHeader>
                      
                      <CardContent>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-800 font-medium">
                              {expandedSections[topic.id] ? (
                                <>
                                  Hide Details <ChevronUp className="w-4 h-4 ml-1" />
                                </>
                              ) : (
                                <>
                                  Read Full Guide <ChevronDown className="w-4 h-4 ml-1" />
                                </>
                              )}
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-4">
                            <div 
                              className="prose prose-sm max-w-none text-gray-700"
                              dangerouslySetInnerHTML={{ __html: topic.content }}
                            />
                          </CollapsibleContent>
                        </Collapsible>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Crisis Resources */}
              <Card className="shadow-lg bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-900 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    Crisis Resources - Get Help Now
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-red-900 mb-3">Emergency Support</h3>
                      <ul className="space-y-2 text-red-800">
                        <li><strong>911:</strong> Medical emergencies</li>
                        <li><strong>988:</strong> Suicide & Crisis Lifeline</li>
                        <li><strong>1-800-273-8255:</strong> National Suicide Prevention</li>
                        <li><strong>1-800-366-8288:</strong> Self-Injury Outreach & Support</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-900 mb-3">Grief Support</h3>
                      <ul className="space-y-2 text-red-800">
                        <li><strong>The Compassionate Friends:</strong> Child loss support</li>
                        <li><strong>GriefShare:</strong> Support group finder</li>
                        <li><strong>Tragedy Assistance Program:</strong> Military families</li>
                        <li><strong>Mothers Against Drunk Driving:</strong> MADD support</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Contact Card */}
                <Card className="shadow-lg bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-900">Need Legal & Medical Support?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-50"
                      onClick={() => {
                        const subject = 'Medical Guidance & Legal Consultation';
                        const body = 'I would like guidance on medical aspects of my wrongful death case and legal consultation.';
                        window.open(`mailto:contact@trembachlaw.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
                      }}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Consultation
                    </Button>
                    
                    <p className="text-sm text-red-800">
                      Compassionate legal guidance combined with understanding of medical and emotional challenges.
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Resources */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <HelpCircle className="w-5 h-5 text-blue-600" />
                      Quick Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left"
                        onClick={() => window.open('/wrongful-death-case-evaluation', '_blank')}
                      >
                        <Scale className="w-4 h-4 mr-2" />
                        Case Evaluation
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left"
                        onClick={() => window.open('/wrongful-death-compensation-calculator', '_blank')}
                      >
                        <DollarSign className="w-4 h-4 mr-2" />
                        Compensation Calculator
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left"
                        onClick={() => window.open('/practice-areas/wrongful-death', '_blank')}
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Legal Information
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Health Reminders */}
                <Card className="shadow-lg bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-900 flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Health Reminders
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-green-800">
                      <li>• Stay hydrated and eat regular meals</li>
                      <li>• Maintain sleep routine when possible</li>
                      <li>• Take medications as prescribed</li>
                      <li>• Keep medical appointments</li>
                      <li>• Practice gentle self-care</li>
                      <li>• Accept help from others</li>
                      <li>• Seek professional support</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Support Organizations */}
                <Card className="shadow-lg bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Support Organizations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li><strong>National Suicide Prevention Lifeline:</strong> 988</li>
                      <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                      <li><strong>SAMHSA Helpline:</strong> 1-800-662-4357</li>
                      <li><strong>American Foundation for Suicide Prevention</strong></li>
                      <li><strong>The Dougy Center:</strong> Children's grief support</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Legal Timeline */}
                <Card className="shadow-lg bg-yellow-50 border-yellow-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-900">
                      <Clock className="w-5 h-5" />
                      Important Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li><strong>2 Years:</strong> General wrongful death filing deadline</li>
                      <li><strong>1-3 Years:</strong> Medical malpractice deadlines</li>
                      <li><strong>6 Months:</strong> Government claims deadline</li>
                      <li><strong>Immediate:</strong> Evidence preservation critical</li>
                    </ul>
                    <p className="text-xs text-yellow-700 mt-3">
                      Don't let grief delay legal action. We handle everything while you focus on healing.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrongfulDeathMedicalGuidance;