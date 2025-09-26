import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Heart, 
  Brain,
  Stethoscope,
  AlertTriangle,
  Clock,
  FileText,
  Phone,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp,
  Activity,
  Eye,
  Zap,
  Shield,
  Ambulance,
  Pill
} from 'lucide-react';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import heroBackground from '@/assets/uber-lyft-medical-guidance-hero.jpg';
import emergencyRoomImage from '@/assets/emergency-room-treatment.jpg';
import rehabilitationImage from '@/assets/physical-therapy-rehabilitation.jpg';
import doctorConsultImage from '@/assets/doctor-consultation.jpg';

gsap.registerPlugin(ScrollTrigger);

const MedicalGuidance: React.FC = () => {
  useScrollRestoration();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Hero Effects
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { 
          opacity: 0, 
          y: 100,
          rotationX: -15,
          transformPerspective: 1000
        },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 1.2, 
          ease: 'power3.out' 
        }
      );

      // Medical cards with heartbeat effect
      gsap.fromTo(contentRef.current?.querySelectorAll('.medical-card'),
        { 
          opacity: 0, 
          y: 80, 
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8, 
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 70%'
          }
        }
      );

      // Pulse animation for medical icons
      gsap.to('.pulse-icon', {
        scale: 1.1,
        opacity: 0.8,
        duration: 1,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

      // 3D floating effect for injury type cards
      gsap.to('.injury-card', {
        y: -10,
        rotationX: 5,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const injuryTypes = [
    {
      icon: Brain,
      title: 'Traumatic Brain Injuries',
      severity: 'Critical',
      color: 'red',
      description: 'Concussions, contusions, and severe brain trauma requiring immediate medical attention',
      symptoms: ['Headaches', 'Confusion', 'Memory loss', 'Nausea', 'Dizziness', 'Personality changes'],
      treatment: ['CT/MRI scans', 'Neurological monitoring', 'Cognitive rehabilitation', 'Speech therapy'],
      longTerm: 'May require lifelong care and impact ability to work and maintain relationships'
    },
    {
      icon: Activity,
      title: 'Spinal Cord Injuries',
      severity: 'Critical',
      color: 'red',
      description: 'Damage to the spinal cord that can result in partial or complete paralysis',
      symptoms: ['Loss of movement', 'Loss of sensation', 'Breathing difficulties', 'Bowel/bladder dysfunction'],
      treatment: ['Emergency surgery', 'Spinal stabilization', 'Physical therapy', 'Occupational therapy'],
      longTerm: 'Often requires extensive rehabilitation and adaptive equipment for daily living'
    },
    {
      icon: Heart,
      title: 'Whiplash & Neck Injuries',
      severity: 'Moderate',
      color: 'yellow',
      description: 'Common in rear-end collisions, can cause chronic pain and limited mobility',
      symptoms: ['Neck pain', 'Stiffness', 'Headaches', 'Shoulder pain', 'Reduced range of motion'],
      treatment: ['Physical therapy', 'Pain medication', 'Muscle relaxants', 'Chiropractic care'],
      longTerm: 'May develop into chronic pain conditions requiring ongoing treatment'
    },
    {
      icon: Zap,
      title: 'Broken Bones & Fractures',
      severity: 'Moderate',
      color: 'orange',
      description: 'Fractures requiring surgical repair and extensive rehabilitation',
      symptoms: ['Severe pain', 'Swelling', 'Deformity', 'Inability to bear weight', 'Bruising'],
      treatment: ['X-rays/CT scans', 'Surgical repair', 'Cast/splinting', 'Physical therapy'],
      longTerm: 'May result in permanent limitations and increased arthritis risk'
    },
    {
      icon: Eye,
      title: 'Internal Injuries',
      severity: 'Critical',
      color: 'red',
      description: 'Hidden injuries to organs that may not show immediate symptoms',
      symptoms: ['Abdominal pain', 'Internal bleeding', 'Weakness', 'Dizziness', 'Rapid pulse'],
      treatment: ['Emergency surgery', 'Blood transfusions', 'Intensive monitoring', 'Organ repair'],
      longTerm: 'Can be life-threatening and may require multiple surgeries'
    },
    {
      icon: Shield,
      title: 'Psychological Trauma',
      severity: 'Serious',
      color: 'blue',
      description: 'PTSD, anxiety, and depression following traumatic rideshare accidents',
      symptoms: ['Flashbacks', 'Anxiety attacks', 'Depression', 'Sleep disturbances', 'Avoidance behaviors'],
      treatment: ['Therapy/counseling', 'Medication', 'EMDR treatment', 'Support groups'],
      longTerm: 'May require ongoing mental health treatment and impact quality of life'
    }
  ];

  const medicalSteps = [
    {
      icon: Ambulance,
      title: 'Immediate Emergency Care',
      timeframe: '0-24 Hours',
      priority: 'Critical',
      actions: [
        'Call 911 if anyone is injured',
        'Get immediate medical evaluation even for minor injuries',
        'Document all injuries with photographs',
        'Request full body CT scan if severe impact',
        'Preserve all medical records and bills',
        'Follow all doctor recommendations exactly'
      ]
    },
    {
      icon: Stethoscope,
      title: 'Comprehensive Medical Evaluation',
      timeframe: '1-7 Days',
      priority: 'High',
      actions: [
        'See primary care physician for full evaluation',
        'Get referred to specialists as needed',
        'Document pain levels and limitations daily',
        'Take photos of visible injuries as they develop',
        'Keep detailed journal of symptoms',
        'Don\'t minimize pain or symptoms to doctors'
      ]
    },
    {
      icon: Activity,
      title: 'Specialized Treatment',
      timeframe: '1 Week - 3 Months',
      priority: 'Ongoing',
      actions: [
        'Follow through with all specialist appointments',
        'Complete prescribed physical therapy',
        'Attend all follow-up appointments',
        'Document how injuries affect daily activities',
        'Keep receipts for all medical expenses',
        'Get work restrictions in writing from doctors'
      ]
    },
    {
      icon: FileText,
      title: 'Long-term Care Planning',
      timeframe: '3+ Months',
      priority: 'Planning',
      actions: [
        'Discuss long-term prognosis with doctors',
        'Get written opinions on permanent restrictions',
        'Plan for future medical needs and costs',
        'Consider vocational rehabilitation if needed',
        'Document ongoing pain and limitations',
        'Maintain consistent treatment records'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Medical Guidance for California Uber & Lyft Accident Victims | Trembach Law Firm"
        description="Essential medical guidance for rideshare accident injuries. Learn about treatment options, documentation, and protecting your health and legal rights in California."
        canonical="https://www.trembachlawfirm.com/uber-lyft/medical-guidance"
      />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-black/60 to-blue-900/80 pointer-events-none"></div>
        
        <GoBack />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <div className="flex justify-center items-center mb-6">
              <Heart className="pulse-icon w-16 h-16 text-red-400 mr-4" />
              <Stethoscope className="pulse-icon w-16 h-16 text-blue-400 mr-4" />
              <Brain className="pulse-icon w-16 h-16 text-purple-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Medical Guidance Center
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1 animate-pulse" />
              ))}
              <span className="ml-2 text-lg">Expert Medical & Legal Coordination</span>
            </div>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive medical guidance for rideshare accident injuries. Learn how to protect your health 
              while preserving your legal rights and maximizing your compensation in California.
            </p>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              Emergency Legal Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12" ref={contentRef}>
        
        {/* Critical First Steps */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-red-600">Critical First Steps After Your Accident</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The actions you take in the first hours and days after a rideshare accident can significantly impact 
              both your health recovery and your legal case. Follow this medical timeline carefully.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {medicalSteps.map((step, index) => {
              const IconComponent = step.icon;
              const priorityColor = step.priority === 'Critical' ? 'red' : 
                                  step.priority === 'High' ? 'yellow' : 
                                  step.priority === 'Ongoing' ? 'blue' : 'green';
              
              return (
                <Card key={index} className="medical-card glass-card border-l-4 border-l-red-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-red-600 rounded-full p-3 mr-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xl font-bold">{step.title}</div>
                          <div className="text-sm text-muted-foreground font-normal">{step.timeframe}</div>
                        </div>
                      </div>
                      <Badge 
                        variant={priorityColor === 'red' ? 'destructive' : 'secondary'}
                        className={priorityColor === 'yellow' ? 'bg-yellow-500 text-white' : 
                                  priorityColor === 'blue' ? 'bg-blue-500 text-white' : ''}
                      >
                        {step.priority}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Emergency Warning */}
          <Card className="medical-card border-2 border-red-500 bg-red-50">
            <CardContent className="p-8">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-red-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">Seek Immediate Medical Attention If You Experience:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-red-800">
                      <li>• Severe headache or confusion</li>
                      <li>• Loss of consciousness</li>
                      <li>• Difficulty breathing</li>
                      <li>• Severe neck or back pain</li>
                      <li>• Numbness or tingling</li>
                    </ul>
                    <ul className="space-y-2 text-red-800">
                      <li>• Abdominal pain or swelling</li>
                      <li>• Vision or hearing problems</li>
                      <li>• Severe bleeding</li>
                      <li>• Signs of shock</li>
                      <li>• Any worsening symptoms</li>
                    </ul>
                  </div>
                  <p className="mt-4 font-semibold text-red-900">
                    Call 911 immediately. Early medical intervention can prevent complications and strengthen your legal case.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Common Injury Types */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Common Rideshare Accident Injuries</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {injuryTypes.map((injury, index) => {
              const IconComponent = injury.icon;
              const colorClasses = {
                red: 'border-l-red-500 bg-red-50',
                yellow: 'border-l-yellow-500 bg-yellow-50',
                orange: 'border-l-orange-500 bg-orange-50',
                blue: 'border-l-blue-500 bg-blue-50'
              };
              
              return (
                <Card key={index} className={`injury-card glass-card border-l-4 ${colorClasses[injury.color as keyof typeof colorClasses]} shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      <div className="flex items-center">
                        <IconComponent className="w-6 h-6 mr-3" />
                        {injury.title}
                      </div>
                      <Badge 
                        variant={injury.severity === 'Critical' ? 'destructive' : 
                                injury.severity === 'Serious' ? 'secondary' : 'outline'}
                      >
                        {injury.severity}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{injury.description}</p>
                    
                    <Collapsible open={expandedSections[`injury-${index}`]} onOpenChange={() => toggleSection(`injury-${index}`)}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full justify-between mb-3">
                          View Details
                          {expandedSections[`injury-${index}`] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-4">
                        <div>
                          <h5 className="font-semibold mb-2 text-sm">Common Symptoms:</h5>
                          <div className="flex flex-wrap gap-1">
                            {injury.symptoms.map((symptom, sIndex) => (
                              <Badge key={sIndex} variant="outline" className="text-xs">
                                {symptom}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-2 text-sm">Treatment Options:</h5>
                          <ul className="text-xs space-y-1">
                            {injury.treatment.map((treatment, tIndex) => (
                              <li key={tIndex} className="flex items-start">
                                <Pill className="w-3 h-3 mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
                                {treatment}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-muted p-3 rounded-lg">
                          <h5 className="font-semibold mb-1 text-sm">Long-term Impact:</h5>
                          <p className="text-xs text-muted-foreground">{injury.longTerm}</p>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Medical Documentation */}
        <section className="mb-16">
          <Card className="medical-card glass-card border-2 border-blue-200 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="flex items-center text-2xl">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Critical Medical Documentation for Your Case
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-900">Documents to Collect:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                      <div>
                        <strong>Emergency Room Records:</strong> Initial evaluation, triage notes, discharge instructions
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                      <div>
                        <strong>Doctor Visit Notes:</strong> All appointments, examinations, diagnoses, treatment plans
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                      <div>
                        <strong>Diagnostic Images:</strong> X-rays, CT scans, MRIs, ultrasounds with radiologist reports
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                      <div>
                        <strong>Lab Results:</strong> Blood tests, toxicology screens, other diagnostic tests
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                      <div>
                        <strong>Therapy Records:</strong> Physical therapy, occupational therapy, speech therapy notes
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                      <div>
                        <strong>Prescription Records:</strong> All medications, dosages, side effects, pharmacy receipts
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-900">Documentation Tips:</h4>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-l-green-500">
                      <h5 className="font-semibold text-green-900 mb-2">Photo Documentation</h5>
                      <p className="text-sm text-green-800">
                        Take photos of injuries daily, showing progression of healing or worsening. 
                        Include photos of medical equipment, braces, casts, and mobility aids.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
                      <h5 className="font-semibold text-blue-900 mb-2">Pain Journal</h5>
                      <p className="text-sm text-blue-800">
                        Keep daily records of pain levels (1-10 scale), limitations in activities, 
                        sleep disruption, and how injuries affect your daily life.
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-l-yellow-500">
                      <h5 className="font-semibold text-yellow-900 mb-2">Work Impact Records</h5>
                      <p className="text-sm text-yellow-800">
                        Document missed work days, reduced hours, inability to perform job duties, 
                        and any work restrictions from doctors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Treatment Facilities */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Recommended Treatment Facilities in California</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="medical-card glass-card shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={emergencyRoomImage}
                  alt="Emergency room treatment facility"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Ambulance className="w-5 h-5 mr-2 text-red-600" />
                  Emergency Care
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Immediate emergency treatment at California's top trauma centers for critical injuries.
                </p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• UCLA Medical Center</li>
                  <li>• Cedars-Sinai Medical Center</li>
                  <li>• UCSF Medical Center</li>
                  <li>• Stanford Hospital</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card glass-card shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={rehabilitationImage}
                  alt="Physical therapy and rehabilitation"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-blue-600" />
                  Rehabilitation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Comprehensive rehabilitation services for long-term recovery and functional improvement.
                </p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Physical Therapy Centers</li>
                  <li>• Occupational Therapy</li>
                  <li>• Neurological Rehabilitation</li>
                  <li>• Pain Management Clinics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="medical-card glass-card shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={doctorConsultImage}
                  alt="Specialist consultation"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Stethoscope className="w-5 h-5 mr-2 text-green-600" />
                  Specialist Care
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Specialized medical care from California's leading injury treatment specialists.
                </p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Orthopedic Surgeons</li>
                  <li>• Neurologists & Neurosurgeons</li>
                  <li>• Pain Management Specialists</li>
                  <li>• Mental Health Professionals</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Legal-Medical Coordination */}
        <section className="mb-16">
          <Card className="medical-card glass-card border-2 border-purple-200 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="flex items-center text-2xl">
                <Shield className="w-6 h-6 mr-3 text-purple-600" />
                How We Coordinate Your Medical Care and Legal Case
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900 mb-3">Medical-Legal Services We Provide:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-3" />
                        <span>Connect you with top injury specialists who work on liens</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-3" />
                        <span>Coordinate with your health insurance for immediate treatment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-3" />
                        <span>Arrange payment guarantees so you get treatment now</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-3" />
                        <span>Obtain and organize all medical records for your case</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-3" />
                        <span>Work with medical experts to document injury severity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-3" />
                        <span>Ensure proper documentation for maximum compensation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-purple-900 mb-3">Our Medical Network Advantage:</h4>
                    <p className="text-sm mb-4">
                      We work with California's leading injury treatment specialists who understand both 
                      medical care and legal documentation requirements. This ensures you receive:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <h5 className="font-semibold text-green-900 text-sm">Expert Medical Care</h5>
                        <p className="text-xs text-green-800">Treatment from specialists experienced with rideshare accident injuries</p>
                      </div>
                      
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <h5 className="font-semibold text-blue-900 text-sm">Proper Documentation</h5>
                        <p className="text-xs text-blue-800">Medical records that support your legal case and maximize compensation</p>
                      </div>
                      
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <h5 className="font-semibold text-purple-900 text-sm">No Upfront Costs</h5>
                        <p className="text-xs text-purple-800">Treatment on a lien basis - doctors wait for payment from your settlement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="medical-card glass-card border-2 border-red-500 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 text-red-900">Your Health and Legal Rights Are Connected</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Proper medical care strengthens your legal case while protecting your health. 
                Don't let insurance companies minimize your injuries or rush your recovery.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Health First</h4>
                  <p className="text-sm text-muted-foreground">
                    Your recovery is our priority - we ensure you get proper medical care
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Legal Protection</h4>
                  <p className="text-sm text-muted-foreground">
                    We protect your rights while you focus on healing
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Immediate Action</h4>
                  <p className="text-sm text-muted-foreground">
                    Time is critical - contact us now for medical and legal guidance
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: Call (818) 123-4567
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg rounded-full border-2 hover:bg-muted"
                  onClick={() => window.location.href = '/uber-lyft/case-evaluation'}
                >
                  Get Medical-Legal Consultation
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                Available 24/7 for serious rideshare accident injuries. No fees unless we win your case.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default MedicalGuidance;