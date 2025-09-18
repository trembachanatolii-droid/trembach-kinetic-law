import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Stethoscope, 
  Brain, 
  Phone, 
  Clock,
  Shield,
  Award,
  AlertTriangle,
  Activity,
  ChevronDown,
  ChevronUp,
  FileText,
  Heart,
  Eye,
  Zap
} from 'lucide-react';
import heroImage from '@/assets/brain-medical-guidance-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const BrainMedicalGuidance: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const medicalSections = [
    {
      title: "Understanding Traumatic Brain Injury (TBI)",
      icon: Brain,
      content: `Traumatic brain injury occurs when external physical force disrupts normal brain function. TBI can result from direct blows to the head, violent shaking, or penetrating injuries. Even "mild" TBI like concussions can cause lasting cognitive, emotional, and physical changes.

The brain controls every aspect of human function - from breathing and movement to personality and memory. When damaged, the effects can be devastating and far-reaching. Brain injuries are often called "invisible disabilities" because symptoms may not be immediately apparent but can profoundly impact daily life.

California recognizes that brain injuries can occur without loss of consciousness and that symptoms may appear days or weeks after the trauma. Understanding the complexity of TBI is crucial for proper medical treatment and legal protection.`
    },
    {
      title: "Types of Brain Injuries",
      icon: Activity,
      content: `Concussion/Mild TBI: Often dismissed as minor, concussions can cause persistent symptoms including headaches, memory problems, mood changes, and difficulty concentrating. Post-concussion syndrome can last months or years.

Moderate TBI: Involves loss of consciousness for 30 minutes to 24 hours. Symptoms include confusion, agitation, and difficulty with cognitive tasks. Recovery varies widely.

Severe TBI: Extended unconsciousness or amnesia lasting more than 24 hours. Often results in permanent cognitive, physical, and behavioral impairments requiring lifetime care.

Diffuse Axonal Injury: Caused by violent shaking or rotation, tearing nerve fibers throughout the brain. Often results in coma or vegetative state.

Anoxic/Hypoxic Brain Injury: Oxygen deprivation causes cell death. Common in drowning, cardiac arrest, or medical malpractice cases.

Penetrating Brain Injury: Objects pierce the skull, damaging specific brain areas. Requires immediate surgery and often causes focal deficits.`
    },
    {
      title: "Warning Signs Requiring Immediate Medical Attention",
      icon: AlertTriangle,
      content: `Seek emergency care immediately for any of these symptoms after head trauma:

Critical Warning Signs:
• Worsening headache that won't go away
• Repeated vomiting or nausea
• Seizures or convulsions
• Inability to wake up or stay awake
• One pupil larger than the other
• Slurred speech or inability to speak
• Weakness or numbness in arms or legs
• Unusual behavior, confusion, or restlessness
• Loss of consciousness, even briefly
• Clear fluids draining from nose or ears

For Children, Also Watch For:
• Persistent crying and inability to be consoled
• Refusal to eat or nurse
• Changes in sleep patterns
• Loss of interest in favorite activities
• Irritability or mood changes

Do not delay seeking medical care. Brain bleeding or swelling can be life-threatening and may occur hours after injury.`
    },
    {
      title: "Common Brain Injury Symptoms",
      icon: Eye,
      content: `Brain injury symptoms can appear immediately or develop over time. Symptoms often worsen with physical or mental exertion.

Physical Symptoms:
• Persistent headaches or migraines
• Nausea and vomiting
• Dizziness or balance problems
• Fatigue or drowsiness
• Sleep disturbances
• Seizures
• Sensitivity to light or noise
• Blurred or double vision
• Ringing in ears (tinnitus)
• Loss of taste or smell

Cognitive Symptoms:
• Memory problems (short-term or long-term)
• Difficulty concentrating or focusing
• Confusion and disorientation
• Slowed thinking or processing
• Difficulty finding words
• Problems with reading or writing
• Poor judgment or decision-making

Emotional/Behavioral Symptoms:
• Depression and anxiety
• Irritability and anger outbursts
• Mood swings
• Personality changes
• Social inappropriateness
• Loss of motivation
• Increased impulsivity`
    },
    {
      title: "Essential Medical Tests and Evaluations",
      icon: Stethoscope,
      content: `Proper diagnosis requires comprehensive evaluation, as standard tests may not detect all brain injuries.

Imaging Studies:
• CT Scan: Shows bleeding, swelling, and skull fractures but may miss mild TBI
• MRI: More detailed than CT, can detect smaller injuries
• DTI (Diffusion Tensor Imaging): Advanced MRI showing microscopic damage
• PET Scan: Shows brain function and metabolism changes
• SPECT Scan: Measures blood flow to different brain regions

Neuropsychological Testing:
• Memory and learning assessments
• Attention and concentration tests
• Executive function evaluation
• Processing speed measurements
• Language and communication testing
• Visual-spatial ability tests

Additional Evaluations:
• Balance and coordination testing
• Vision and hearing assessments
• Sleep studies
• Neurological examinations
• Psychiatric evaluations

Documentation of all testing is crucial for both treatment and legal purposes. Keep copies of all medical records and test results.`
    },
    {
      title: "Treatment and Rehabilitation Options",
      icon: Heart,
      content: `Brain injury treatment requires a multidisciplinary approach addressing physical, cognitive, and emotional needs.

Acute Medical Care:
• Emergency stabilization and monitoring
• Surgery for bleeding or pressure relief
• Medication management (anti-seizure, pain, mood)
• Intensive care unit monitoring

Rehabilitation Therapies:
• Physical Therapy: Improves strength, balance, coordination, and motor skills
• Occupational Therapy: Helps with daily living skills and adaptive techniques
• Speech Therapy: Addresses communication, swallowing, and cognitive issues
• Cognitive Rehabilitation: Retrains thinking and memory skills
• Vision Therapy: Treats visual processing problems
• Recreational Therapy: Uses activities to improve function

Psychological Support:
• Individual counseling for adjustment and coping
• Family therapy to address relationship changes
• Support groups for TBI survivors and families
• Psychiatric care for depression, anxiety, or behavioral issues

Assistive Technology:
• Memory aids and reminder systems
• Communication devices
• Mobility equipment
• Computer adaptations
• Home safety modifications

Early, intensive rehabilitation provides the best outcomes. Insurance often limits therapy despite medical necessity.`
    },
    {
      title: "Long-Term Care and Life Planning",
      icon: Zap,
      content: `Severe brain injuries often require lifetime care and support services.

Levels of Care:
• Independent living with support services
• Assisted living facilities
• Skilled nursing facilities
• 24-hour attendant care at home
• Specialized brain injury residential programs

Care Coordination:
• Case managers coordinate services
• Life care planners assess long-term needs
• Social workers help access resources
• Vocational rehabilitation for return to work

Financial Planning:
• Special needs trusts protect government benefits
• Structured settlements provide lifetime income
• Life insurance and disability benefits
• Social Security Disability (SSDI/SSI)
• Medicare and Medicaid planning

Family Support:
• Caregiver training and education
• Respite care services
• Family counseling and support groups
• Sibling and children's programs
• Emergency planning

Legal considerations include guardianship, advance directives, and estate planning to protect the injured person's interests and ensure appropriate care throughout their lifetime.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Brain Injury Medical Guide | TBI Treatment & Recovery | California Attorneys"
        description="Comprehensive medical guide for brain injury victims in California. Understanding TBI symptoms, treatment options, and recovery resources from experienced attorneys."
        canonical="/brain-medical-guidance"
      />
      
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge className="bg-white/10 text-white border-white/20">
              <Award className="w-4 h-4 mr-2" />
              Medical Experts
            </Badge>
            <Badge className="bg-white/10 text-white border-white/20">
              <Stethoscope className="w-4 h-4 mr-2" />
              Comprehensive Guide
            </Badge>
            <Badge className="bg-white/10 text-white border-white/20">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Support
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Brain Injury Medical Guidance
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Essential medical information for brain injury victims and families. Understanding TBI symptoms, 
            treatment options, and recovery resources in California.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {medicalSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index}>
                  <Collapsible 
                    open={expandedSection === index}
                    onOpenChange={() => setExpandedSection(expandedSection === index ? null : index)}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Icon className="w-6 h-6 text-primary" />
                            {section.title}
                          </div>
                          {expandedSection === index ? <ChevronUp /> : <ChevronDown />}
                        </CardTitle>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className="prose max-w-none">
                          {section.content.split('\n\n').map((paragraph, pIndex) => (
                            <p key={pIndex} className="mb-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              );
            })}

            {/* Emergency Resources */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="w-6 h-6" />
                  Emergency Brain Injury Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Emergency Hotlines</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Emergency: 911</li>
                      <li>• Brain Injury Help: 1-800-444-6443</li>
                      <li>• Poison Control: 1-800-222-1222</li>
                      <li>• Crisis Text Line: Text HOME to 741741</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">California Resources</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• CA Dept of Rehabilitation</li>
                      <li>• Regional Centers</li>
                      <li>• Brain Injury Association of CA</li>
                      <li>• California Hospital Association</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-red-600 text-white sticky top-4">
              <CardHeader>
                <CardTitle className="text-center">Need Legal Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-white text-red-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (818) 123-4567
                </Button>
                <p className="text-center text-sm">Free consultation with brain injury attorney</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Medical Documentation Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-0.5" />
                    <span>Keep all medical records and bills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-primary mt-0.5" />
                    <span>Document daily symptoms and changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="w-4 h-4 text-primary mt-0.5" />
                    <span>Get copies of all test results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5" />
                    <span>Track appointments and treatments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>California TBI Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">280,000+</p>
                    <p className="text-muted-foreground">Annual TBI cases in CA</p>
                  </div>
                  <div>
                    <p className="font-medium">47%</p>
                    <p className="text-muted-foreground">Caused by falls</p>
                  </div>
                  <div>
                    <p className="font-medium">$1.8-6.5M</p>
                    <p className="text-muted-foreground">Severe TBI lifetime cost</p>
                  </div>
                  <div>
                    <p className="font-medium">52%</p>
                    <p className="text-muted-foreground">Remain disabled after 1 year</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Medical Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Never ignore head trauma symptoms</li>
                  <li>• Get immediate medical evaluation</li>
                  <li>• Follow all doctor recommendations</li>
                  <li>• Don't return to activities too soon</li>
                  <li>• Avoid alcohol and drugs</li>
                  <li>• Get plenty of rest</li>
                  <li>• Stay hydrated</li>
                  <li>• Report new or worsening symptoms</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Protect Your Medical and Legal Rights</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Proper medical care and legal representation go hand in hand for brain injury victims. 
              We work with leading medical experts to ensure you get the care and compensation you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (818) 123-4567
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white hover:text-primary">
                <FileText className="w-5 h-5 mr-2" />
                Start Case Evaluation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainMedicalGuidance;