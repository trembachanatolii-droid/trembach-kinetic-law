import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Stethoscope,
  Heart,
  Brain,
  Activity,
  Shield,
  Users,
  Phone,
  Star,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Clock,
  Map
} from 'lucide-react';
import heroBackground from '@/assets/spinal-cord-medical-guidance-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const SpinalCordMedicalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const medicalTopics = [
    {
      id: 'immediate-care',
      title: 'Immediate Medical Care',
      icon: AlertTriangle,
      summary: 'Critical first steps after spinal cord injury',
      content: `
        <h3>Emergency Response and Stabilization</h3>
        <p>Immediate medical care after a spinal cord injury is crucial for preventing further damage and maximizing recovery potential. The first few hours are critical - proper immobilization and emergency treatment can mean the difference between incomplete and complete paralysis.</p>
        
        <h4>Pre-Hospital Care:</h4>
        <ul>
          <li>Complete spinal immobilization with cervical collar and backboard</li>
          <li>Airway management - may require immediate intubation for high cervical injuries</li>
          <li>IV access and fluid resuscitation while monitoring for neurogenic shock</li>
          <li>High-dose corticosteroids (controversial but sometimes used)</li>
          <li>Rapid transport to designated spinal cord injury center</li>
        </ul>
        
        <h4>Emergency Department Management:</h4>
        <ul>
          <li>Complete neurological assessment using ASIA Impairment Scale</li>
          <li>Imaging studies: CT scan, MRI to assess injury extent</li>
          <li>Blood pressure management - maintaining MAP 85-90 mmHg</li>
          <li>Temperature regulation - preventing hypothermia</li>
          <li>Bladder catheterization and bowel management</li>
        </ul>
        
        <p>Early surgical intervention may be necessary to decompress the spinal cord, stabilize fractures, or remove foreign objects. The timing of surgery remains controversial, but most experts agree that prompt decompression within 24 hours may improve outcomes.</p>
      `
    },
    {
      id: 'injury-classification',
      title: 'Understanding Injury Classification',
      icon: Brain,
      summary: 'Complete vs incomplete injuries and ASIA scale',
      content: `
        <h3>ASIA Impairment Scale Classification</h3>
        <p>The American Spinal Injury Association (ASIA) Impairment Scale is the gold standard for classifying spinal cord injury severity and predicting recovery potential.</p>
        
        <h4>ASIA Classification Levels:</h4>
        <ul>
          <li><strong>ASIA A (Complete):</strong> No sensory or motor function preserved below the injury level</li>
          <li><strong>ASIA B (Incomplete):</strong> Sensory but not motor function preserved below injury level</li>
          <li><strong>ASIA C (Incomplete):</strong> Motor function preserved, but most muscles below injury level have muscle grade less than 3</li>
          <li><strong>ASIA D (Incomplete):</strong> Motor function preserved, most muscles below injury level have muscle grade 3 or more</li>
          <li><strong>ASIA E (Normal):</strong> Normal sensory and motor function</li>
        </ul>
        
        <h4>Neurological Level of Injury:</h4>
        <p>The neurological level is the lowest spinal segment with normal sensory and motor function. This determines functional expectations:</p>
        
        <ul>
          <li><strong>C1-C4:</strong> Requires ventilator support, limited head/neck movement</li>
          <li><strong>C5:</strong> Shoulder and bicep function, can operate electric wheelchair</li>
          <li><strong>C6:</strong> Wrist extension, can transfer with assistance</li>
          <li><strong>C7-C8:</strong> Triceps and hand function, independent transfers possible</li>
          <li><strong>T1-T6:</strong> Full arm function, trunk stability limited</li>
          <li><strong>T7-T12:</strong> Good trunk control, independent wheelchair mobility</li>
          <li><strong>L1-L5:</strong> Hip and knee function, may walk with braces</li>
        </ul>
      `
    },
    {
      id: 'complications',
      title: 'Managing Secondary Complications',
      icon: Shield,
      summary: 'Preventing and treating SCI complications',
      content: `
        <h3>Common Secondary Complications</h3>
        <p>Secondary complications often cause more problems than the original injury. Prevention and early treatment are essential for maintaining health and independence.</p>
        
        <h4>Autonomic Dysreflexia (AD):</h4>
        <p>Life-threatening condition affecting injuries above T6. Triggers include bladder distension, bowel impaction, pressure sores, or any noxious stimulus below the injury level.</p>
        <ul>
          <li>Symptoms: Severe headache, hypertension, sweating, flushing</li>
          <li>Treatment: Immediately sit up, check and empty bladder, remove triggering stimulus</li>
          <li>Emergency care if BP remains elevated above 150/100</li>
        </ul>
        
        <h4>Pressure Sores (Decubitus Ulcers):</h4>
        <ul>
          <li>Daily skin inspection using mirrors</li>
          <li>Pressure relief every 15-30 minutes when sitting</li>
          <li>Proper wheelchair cushioning and positioning</li>
          <li>Immediate medical attention for any skin breakdown</li>
        </ul>
        
        <h4>Respiratory Complications:</h4>
        <ul>
          <li>Assisted coughing techniques for injuries above T12</li>
          <li>Incentive spirometry and breathing exercises</li>
          <li>Aggressive treatment of respiratory infections</li>
          <li>Annual influenza and pneumonia vaccinations</li>
        </ul>
        
        <h4>Neurogenic Bladder Management:</h4>
        <ul>
          <li>Intermittent catheterization preferred over indwelling catheters</li>
          <li>Maintain bladder volume under 400-500ml</li>
          <li>Monitor for urinary tract infections</li>
          <li>Annual urological evaluation and kidney function tests</li>
        </ul>
        
        <h4>Neurogenic Bowel Program:</h4>
        <ul>
          <li>Consistent timing - same time daily</li>
          <li>High-fiber diet and adequate fluid intake</li>
          <li>Suppositories or enemas as needed</li>
          <li>Digital stimulation for reflex bowel programs</li>
        </ul>
      `
    },
    {
      id: 'rehabilitation',
      title: 'Rehabilitation and Recovery',
      icon: Activity,
      summary: 'Maximizing function through comprehensive rehab',
      content: `
        <h3>Comprehensive Rehabilitation Approach</h3>
        <p>Rehabilitation begins immediately after medical stabilization and continues throughout life. The goal is maximizing independence, preventing complications, and improving quality of life.</p>
        
        <h4>Acute Rehabilitation Phase (2-6 months):</h4>
        <ul>
          <li>Transfer training and wheelchair mobility</li>
          <li>Activities of daily living (bathing, dressing, grooming)</li>
          <li>Bowel and bladder management training</li>
          <li>Skin care and pressure relief techniques</li>
          <li>Equipment evaluation and prescription</li>
          <li>Psychological counseling and adjustment support</li>
        </ul>
        
        <h4>Physical Therapy Goals:</h4>
        <ul>
          <li>Maintaining range of motion and preventing contractures</li>
          <li>Strengthening remaining functional muscles</li>
          <li>Balance and coordination training</li>
          <li>Wheelchair skills and advanced mobility techniques</li>
          <li>Gait training with assistive devices (for incomplete injuries)</li>
        </ul>
        
        <h4>Occupational Therapy Focus:</h4>
        <ul>
          <li>Adaptive equipment training</li>
          <li>Home and vehicle modification assessment</li>
          <li>Work and driving evaluations</li>
          <li>Computer access and assistive technology</li>
          <li>Energy conservation techniques</li>
        </ul>
        
        <h4>Emerging Therapies:</h4>
        <ul>
          <li>Functional Electrical Stimulation (FES)</li>
          <li>Robotic-assisted gait training</li>
          <li>Epidural stimulation therapy</li>
          <li>Activity-based therapy programs</li>
          <li>Stem cell research (experimental)</li>
        </ul>
      `
    },
    {
      id: 'long-term-care',
      title: 'Long-Term Health Management',
      icon: Heart,
      summary: 'Lifelong medical care and monitoring',
      content: `
        <h3>Lifelong Medical Care Requirements</h3>
        <p>Spinal cord injury requires continuous medical management to prevent complications and maintain optimal health throughout life.</p>
        
        <h4>Annual Medical Evaluations:</h4>
        <ul>
          <li>Complete physical examination with SCI specialist</li>
          <li>Urological evaluation with kidney function tests</li>
          <li>Cardiovascular screening and risk assessment</li>
          <li>Bone density testing (DEXA scan)</li>
          <li>Skin integrity assessment</li>
          <li>Equipment evaluation and replacement needs</li>
          <li>Psychological and social adjustment screening</li>
        </ul>
        
        <h4>Preventive Care Measures:</h4>
        <ul>
          <li>Cardiovascular exercise within functional limits</li>
          <li>Calcium and Vitamin D supplementation</li>
          <li>Regular dental care (may require antibiotic prophylaxis)</li>
          <li>Routine cancer screenings</li>
          <li>Vaccination updates including flu and pneumonia</li>
        </ul>
        
        <h4>Aging with Spinal Cord Injury:</h4>
        <ul>
          <li>Increased risk of premature aging and wear-and-tear injuries</li>
          <li>Shoulder impingement and rotator cuff tears</li>
          <li>Carpal tunnel syndrome from wheelchair propulsion</li>
          <li>Post-polio-like syndrome with progressive weakness</li>
          <li>Need for modified equipment and increased assistance</li>
        </ul>
        
        <h4>Pain Management:</h4>
        <ul>
          <li>Neuropathic pain medications (gabapentin, pregabalin)</li>
          <li>Muscle relaxants for spasticity</li>
          <li>Topical treatments for localized pain</li>
          <li>Non-pharmacological approaches (meditation, acupuncture)</li>
          <li>Intrathecal baclofen pumps for severe spasticity</li>
        </ul>
      `
    },
    {
      id: 'equipment-technology',
      title: 'Equipment and Assistive Technology',
      icon: Users,
      summary: 'Essential equipment for independence',
      content: `
        <h3>Essential Medical Equipment</h3>
        <p>Proper equipment is crucial for independence, health maintenance, and quality of life. Equipment needs vary based on injury level and personal preferences.</p>
        
        <h4>Mobility Equipment:</h4>
        <ul>
          <li><strong>Manual Wheelchairs:</strong> Lightweight, ultralight, or heavy-duty depending on needs</li>
          <li><strong>Power Wheelchairs:</strong> For higher-level injuries or those unable to propel manual chairs</li>
          <li><strong>Standing Frames:</strong> For weight-bearing and circulation benefits</li>
          <li><strong>Transfer Boards:</strong> For safe transfers between surfaces</li>
          <li><strong>Vehicle Modifications:</strong> Hand controls, wheelchair lifts, or ramps</li>
        </ul>
        
        <h4>Home Medical Equipment:</h4>
        <ul>
          <li>Hospital bed with pressure-relief mattress</li>
          <li>Patient lift systems (overhead or mobile)</li>
          <li>Shower/commode chairs and grab bars</li>
          <li>Respiratory equipment (ventilators, suction machines)</li>
          <li>Bladder management supplies (catheters, leg bags)</li>
        </ul>
        
        <h4>Assistive Technology:</h4>
        <ul>
          <li>Environmental control units for home automation</li>
          <li>Computer access (voice recognition, eye-tracking, sip-and-puff)</li>
          <li>Communication devices for ventilator-dependent individuals</li>
          <li>Smart home technology and mobile device adaptations</li>
        </ul>
        
        <h4>Equipment Funding Sources:</h4>
        <ul>
          <li>Private health insurance and Medicare/Medicaid</li>
          <li>State vocational rehabilitation programs</li>
          <li>Equipment loan closets and refurbishment programs</li>
          <li>Charitable organizations and foundations</li>
          <li>Legal settlements covering lifetime equipment needs</li>
        </ul>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Spinal Cord Injury Medical Guidance | California Paralysis Treatment Information"
        description="Comprehensive medical guidance for spinal cord injury victims in California. Expert information on SCI treatment, rehabilitation, and long-term care from experienced attorneys."
        canonical="/spinal-cord-medical-guidance"
      />
      
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Spinal Cord Injury Medical Guidance
          </h1>
          <p className="text-xl mb-6">
            Essential medical information for California paralysis victims and families
          </p>
          
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-lg">Medical-Legal Expertise</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Medical Topics */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Complete Medical Guide for Spinal Cord Injuries
                </h2>
                <p className="text-lg text-muted-foreground">
                  Understanding your medical care is crucial for recovery and legal compensation. 
                  This guide provides essential information based on current medical standards and our legal experience.
                </p>
              </div>

              {medicalTopics.map((topic, index) => (
                <Card key={topic.id} className="shadow-lg border border-border">
                  <CardHeader 
                    className="cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors"
                    onClick={() => toggleSection(topic.id)}
                  >
                    <CardTitle className="flex items-center justify-between text-xl">
                      <div className="flex items-center">
                        <topic.icon className="w-6 h-6 mr-3 text-blue-600" />
                        {topic.title}
                      </div>
                      {expandedSections[topic.id] ? <ChevronUp /> : <ChevronDown />}
                    </CardTitle>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {topic.summary}
                    </p>
                  </CardHeader>
                  
                  <Collapsible open={expandedSections[topic.id]} onOpenChange={() => toggleSection(topic.id)}>
                    <CollapsibleContent>
                      <CardContent className="p-8 bg-white">
                        <div 
                          className="prose prose-lg max-w-none text-base leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: topic.content }}
                        />
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>

            {/* Important Medical Resources */}
            <Card className="mt-8 bg-green-50 border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 flex items-center">
                  <Map className="w-6 h-6 mr-2" />
                  California Spinal Cord Injury Centers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg text-green-800 mb-3">Model SCI Centers</h3>
                    <ul className="space-y-2 text-base text-green-700">
                      <li>• Rancho Los Amigos National Rehabilitation Center</li>
                      <li>• Santa Clara Valley Medical Center</li>
                      <li>• UC Davis Medical Center</li>
                      <li>• Cedars-Sinai Medical Center</li>
                      <li>• Casa Colina Rehabilitation Hospital</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-green-800 mb-3">Specialized Services</h3>
                    <ul className="space-y-2 text-base text-green-700">
                      <li>• Acute care and surgical intervention</li>
                      <li>• Comprehensive rehabilitation programs</li>
                      <li>• Lifetime follow-up care</li>
                      <li>• Equipment evaluation and training</li>
                      <li>• Research and clinical trials</li>
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
              <Card className="border-2 border-primary shadow-lg">
                <CardHeader className="bg-primary text-primary-foreground text-center">
                  <CardTitle className="text-xl">Medical-Legal Questions?</CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center space-y-4">
                  <div>
                    <Phone className="w-12 h-12 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold text-lg mb-2">Call Now</h3>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-base"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      (818) 123-4567
                    </Button>
                  </div>
                  
                  <div className="text-center pt-4 border-t">
                    <p className="text-base font-medium text-primary">Medical-Legal Expertise</p>
                    <p className="text-base text-muted-foreground">Understanding both medicine and law</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Medical Facts */}
              <Card className="border border-border bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Key Medical Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-base">
                    <div>
                      <h4 className="font-semibold text-blue-800">First 8 Hours Critical</h4>
                      <p className="text-blue-700">Immediate proper treatment can prevent further damage</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Recovery Window</h4>
                      <p className="text-blue-700">Most improvement occurs within first 2 years</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Lifetime Care Required</h4>
                      <p className="text-blue-700">Ongoing medical management prevents complications</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Equipment Essential</h4>
                      <p className="text-blue-700">Proper equipment maximizes independence</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Legal Importance */}
              <Card className="border-2 border-red-300 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-lg text-red-800">Legal Importance of Medical Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-base text-red-700">
                    <p>Proper medical documentation is crucial for your legal case:</p>
                    <ul className="space-y-2">
                      <li>• Establishes injury severity and prognosis</li>
                      <li>• Documents lifetime care needs</li>
                      <li>• Supports compensation calculations</li>
                      <li>• Proves causation from accident</li>
                      <li>• Demonstrates ongoing treatment costs</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Warning Notice */}
              <Card className="border-2 border-yellow-300 bg-yellow-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-yellow-800 mb-2">Medical Disclaimer</h3>
                      <p className="text-base text-yellow-700 leading-relaxed">
                        This information is for educational purposes only and does not constitute medical advice. 
                        Always consult with qualified healthcare providers for your specific medical needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Links */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Related Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-base"
                    onClick={() => window.location.href = '/spinal-cord-case-evaluation'}
                  >
                    <Stethoscope className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-base"
                    onClick={() => window.location.href = '/spinal-cord-compensation-calculator'}
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    Compensation Calculator
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-base"
                    onClick={() => window.location.href = '/practice-areas/spinal-cord-injuries'}
                  >
                    <Brain className="w-4 h-4 mr-2" />
                    SCI Legal Information
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinalCordMedicalGuidance;