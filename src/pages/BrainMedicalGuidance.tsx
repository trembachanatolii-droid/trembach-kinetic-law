import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Stethoscope, 
  Calendar, 
  FileText, 
  AlertTriangle, 
  Phone, 
  CheckCircle, 
  Clock,
  Heart,
  Activity,
  Eye,
  Zap,
  Users,
  BookOpen
} from 'lucide-react';
import heroBackground from '@/assets/brain-medical-guidance-hero.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

const BrainMedicalGuidance: React.FC = () => {
  const emergencySymptoms = [
    "Worsening headache",
    "Repeated vomiting", 
    "Seizures or convulsions",
    "Inability to wake up",
    "One pupil larger than the other",
    "Slurred speech",
    "Weakness or numbness in limbs",
    "Unusual behavior or confusion",
    "Loss of consciousness",
    "Clear fluids from nose or ears"
  ];

  const specialistTypes = [
    {
      title: "Neurologist",
      icon: Brain,
      description: "Diagnoses and treats disorders of the nervous system including brain injuries",
      whenToSee: "Initial evaluation, ongoing neurological assessment, medication management"
    },
    {
      title: "Neurosurgeon", 
      icon: Zap,
      description: "Performs brain surgery if needed to reduce pressure or remove blood clots",
      whenToSee: "Severe TBI requiring surgical intervention, intracranial pressure issues"
    },
    {
      title: "Neuropsychologist",
      icon: Activity,
      description: "Tests cognitive function and develops rehabilitation strategies",
      whenToSee: "Cognitive testing, documenting deficits, treatment planning"
    },
    {
      title: "Physiatrist",
      icon: Heart,
      description: "Rehabilitation medicine specialist coordinating recovery programs",
      whenToSee: "Overall rehabilitation planning, coordinating therapy services"
    },
    {
      title: "Neuro-Ophthalmologist",
      icon: Eye,
      description: "Treats vision problems caused by brain injury",
      whenToSee: "Vision changes, double vision, visual field defects"
    },
    {
      title: "Psychiatrist",
      icon: Users,
      description: "Manages mood, behavior, and psychiatric symptoms after TBI",
      whenToSee: "Depression, anxiety, personality changes, behavioral issues"
    }
  ];

  const documentationList = [
    {
      category: "Medical Documentation",
      items: [
        "Emergency room records",
        "Hospital admission notes",
        "CT and MRI scan reports",
        "Neuropsychological test results",
        "Physician consultation notes",
        "Therapy evaluation reports",
        "Medication records"
      ]
    },
    {
      category: "Financial Documentation", 
      items: [
        "Medical bills and receipts",
        "Insurance claim forms",
        "Lost wage documentation",
        "Disability benefit records",
        "Travel expenses for medical care",
        "Home modification costs",
        "Assistive device purchases"
      ]
    }
  ];

  const treatmentTimeline = [
    {
      phase: "Emergency Phase (0-72 hours)",
      color: "red",
      description: "Immediate stabilization, preventing secondary injury, monitoring intracranial pressure"
    },
    {
      phase: "Acute Care (3-30 days)",
      color: "orange", 
      description: "Medical stabilization, initial assessments, early rehabilitation planning"
    },
    {
      phase: "Rehabilitation (1-6 months)",
      color: "blue",
      description: "Intensive therapy, cognitive training, skill rebuilding, family education"
    },
    {
      phase: "Long-term Recovery (6+ months)",
      color: "green",
      description: "Ongoing therapy, community reintegration, adaptive strategies, maintenance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Brain Injury Medical Guidance | TBI Treatment Guide | California"
        description="Comprehensive medical guidance for brain injury victims. Find the right specialists, understand treatment options, and document your TBI case properly."
        canonical="/brain-medical-guidance"
      />

      <GoBack />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Brain Injury Medical Guidance
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Essential medical information and resources for brain injury victims and their families.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Emergency Warning */}
            <Card className="border-2 border-red-500 bg-red-50 dark:bg-red-950/20">
              <CardHeader>
                <CardTitle className="flex items-center text-red-800 dark:text-red-200">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  When to Seek Emergency Care
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-800 dark:text-red-200 mb-4 font-medium">
                  Call 911 immediately if you experience any of these symptoms:
                </p>
                <div className="grid md:grid-cols-2 gap-2">
                  {emergencySymptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center text-red-800 dark:text-red-200">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      {symptom}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-600 text-white rounded-lg">
                  <p className="font-bold text-center text-lg">
                    Emergency: Call 911 | Non-Emergency: Call (818) 123-4567
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Immediate Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <CheckCircle className="w-6 h-6 mr-2 text-primary" />
                  Immediate Steps After Brain Injury
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Get Medical Attention</h4>
                      <p className="text-muted-foreground">Even if you feel fine, see a doctor immediately. Brain injuries can have delayed symptoms.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Document Everything</h4>
                      <p className="text-muted-foreground">Keep detailed records of symptoms, treatments, and how the injury affects your daily life.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Follow Up Consistently</h4>
                      <p className="text-muted-foreground">Attend all medical appointments and follow treatment recommendations completely.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-foreground">Contact Legal Counsel</h4>
                      <p className="text-muted-foreground">Speak with an experienced brain injury attorney to protect your rights and maximize compensation.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Symptoms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Brain className="w-6 h-6 mr-2 text-primary" />
                  Common Brain Injury Symptoms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Physical Symptoms</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Headaches</li>
                      <li>• Dizziness/balance problems</li>
                      <li>• Nausea/vomiting</li>
                      <li>• Fatigue</li>
                      <li>• Sleep disturbances</li>
                      <li>• Seizures</li>
                      <li>• Sensitivity to light/sound</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Cognitive Symptoms</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Memory problems</li>
                      <li>• Difficulty concentrating</li>
                      <li>• Confusion</li>
                      <li>• Slowed thinking</li>
                      <li>• Language difficulties</li>
                      <li>• Decision-making problems</li>
                      <li>• Executive function issues</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Emotional Symptoms</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Irritability</li>
                      <li>• Depression</li>
                      <li>• Anxiety</li>
                      <li>• Mood swings</li>
                      <li>• Personality changes</li>
                      <li>• Loss of emotional control</li>
                      <li>• Social withdrawal</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Specialists */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Stethoscope className="w-6 h-6 mr-2 text-primary" />
                  Brain Injury Medical Specialists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {specialistTypes.map((specialist, index) => (
                    <div key={index} className="flex gap-4 p-4 border border-border rounded-lg">
                      <div className="flex-shrink-0">
                        <specialist.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{specialist.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{specialist.description}</p>
                        <p className="text-xs text-primary font-medium">When to see: {specialist.whenToSee}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Treatment Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="w-6 h-6 mr-2 text-primary" />
                  Typical Treatment Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {treatmentTimeline.map((phase, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-4 h-4 rounded-full bg-${phase.color}-500 mt-2`}></div>
                        <div className={`w-0.5 h-16 bg-${phase.color}-200 ml-1.5 mt-1 ${index === treatmentTimeline.length - 1 ? 'hidden' : ''}`}></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{phase.phase}</h4>
                        <p className="text-muted-foreground text-sm">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Documentation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="w-6 h-6 mr-2 text-primary" />
                  Essential Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {documentationList.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-4">{category.category}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-muted-foreground text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    <strong>Tip:</strong> Keep copies of all medical records and organize them chronologically. 
                    This documentation is crucial for both your medical care and legal case.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Emergency Contact */}
              <Card className="p-6 text-center bg-gradient-to-b from-red-600 to-red-700 text-white">
                <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Emergency</h3>
                <p className="text-2xl mb-4">Call 911</p>
                <div className="border-t border-red-400 pt-4">
                  <p className="text-lg font-semibold">Legal Questions?</p>
                  <Button 
                    className="w-full mt-2 bg-white text-red-600 hover:bg-gray-100"
                    onClick={() => window.open('tel:8181234567')}
                  >
                    Call (818) 123-4567
                  </Button>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full" 
                    onClick={() => window.location.href = '/brain-case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = '/brain-compensation-calculator'}
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    Calculate Compensation
                  </Button>
                </div>
              </Card>

              {/* Medical Tips */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  <Heart className="w-5 h-5 inline mr-2" />
                  Medical Tips
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <p className="text-blue-800 dark:text-blue-200">
                      Keep a daily symptom journal to track your recovery progress and document patterns.
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <p className="text-green-800 dark:text-green-200">
                      Ask for copies of all test results and medical reports at each appointment.
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <p className="text-purple-800 dark:text-purple-200">
                      Don't minimize symptoms to doctors - be completely honest about all problems.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Time Sensitive Warning */}
              <Card className="p-6 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-yellow-600 mr-2" />
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-200">Time Sensitive</h3>
                </div>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed mb-4">
                  California law gives you only 2 years to file a brain injury claim. Early medical treatment 
                  and legal consultation are crucial for the best outcome.
                </p>
                <Button 
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                  onClick={() => window.location.href = '/brain-case-evaluation'}
                >
                  Protect Your Rights Now
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainMedicalGuidance;