import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Scale, 
  Clock, 
  Shield, 
  FileText, 
  AlertTriangle, 
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Users,
  Building,
  Gavel,
  BookOpen,
  Target,
  TrendingUp
} from 'lucide-react';
import SEO from '@/components/SEO';

import heroBackground from '@/assets/paralysis-legal-guidance-hero.jpg';

const ParalysisLegalGuidance: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  const timelineSteps = [
    {
      step: "Immediate",
      title: "Seek Medical Attention",
      description: "Emergency medical care is the top priority. Document all treatment and follow medical advice.",
      icon: AlertTriangle,
      color: "text-red-600"
    },
    {
      step: "Within 24-48 Hours",
      title: "Contact an Attorney",
      description: "Early legal consultation preserves evidence and protects your rights under California law.",
      icon: Scale,
      color: "text-blue-600"
    },
    {
      step: "Within 1 Week",
      title: "Evidence Collection",
      description: "Gather accident reports, witness information, photos, and medical records.",
      icon: FileText,
      color: "text-green-600"
    },
    {
      step: "Within 30 Days",
      title: "Insurance Claims",
      description: "File necessary insurance claims while being careful about recorded statements.",
      icon: Shield,
      color: "text-orange-600"
    },
    {
      step: "Ongoing",
      title: "Medical Documentation",
      description: "Continue treatment and maintain detailed medical records of your condition.",
      icon: Building,
      color: "text-purple-600"
    }
  ];

  const legalFactors = [
    {
      title: "Statute of Limitations",
      description: "California generally allows 2 years from injury date for personal injury claims. Medical malpractice has shorter deadlines.",
      icon: Clock,
      importance: "Critical"
    },
    {
      title: "Comparative Negligence",
      description: "California's pure comparative fault system allows recovery even if you're partially at fault.",
      icon: Scale,
      importance: "Important"
    },
    {
      title: "Insurance Coverage",
      description: "Multiple insurance policies may provide coverage including auto, premises liability, and umbrella policies.",
      icon: Shield,
      importance: "High"
    },
    {
      title: "Expert Witnesses",
      description: "Medical experts, life care planners, and economists are crucial for proving damages in paralysis cases.",
      icon: Users,
      importance: "Essential"
    }
  ];

  const compensationTypes = [
    {
      category: "Economic Damages",
      items: [
        "Past and future medical expenses",
        "Lost wages and earning capacity",
        "Home modifications and equipment",
        "Ongoing care and rehabilitation costs",
        "Transportation modifications"
      ],
      icon: DollarSign
    },
    {
      category: "Non-Economic Damages",
      items: [
        "Pain and suffering",
        "Loss of enjoyment of life",
        "Emotional distress",
        "Loss of consortium (spouse)",
        "Disability and disfigurement"
      ],
      icon: Target
    },
    {
      category: "Special Considerations",
      items: [
        "Life care planning",
        "Future medical complications",
        "Technology and equipment updates",
        "Caregiver training and costs",
        "Psychological counseling needs"
      ],
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Paralysis Legal Guidance - California Spinal Cord Injury Laws | Expert Attorneys"
        description="Comprehensive legal guidance for paralysis cases in California. Understand your rights, deadlines, and legal options after a spinal cord injury. Free consultation available."
        keywords="paralysis legal guidance, California spinal cord injury law, paralysis attorney advice, legal rights paralysis, spinal cord injury lawsuit"
      />

      

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat hero-content"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Paralysis Legal Guidance
            </h1>
            <p className="text-xl mb-6 text-white">
              Expert legal guidance for spinal cord injury cases in California
            </p>
            <div className="flex items-center justify-center space-x-6">
              <Badge variant="secondary" className="bg-green-600 text-white px-4 py-2">
                <Scale className="w-4 h-4 mr-2" />
                Expert Legal Advice
              </Badge>
              <Badge variant="secondary" className="bg-blue-600 text-white px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Time-Sensitive Rights
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Critical Timeline */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Critical Legal Timeline After Paralysis</h2>
            <p className="text-xl text-muted-foreground">
              Time-sensitive steps to protect your legal rights and maximize compensation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-full ${step.color === 'text-red-600' ? 'bg-red-100 dark:bg-red-900' : 
                      step.color === 'text-blue-600' ? 'bg-blue-100 dark:bg-blue-900' :
                      step.color === 'text-green-600' ? 'bg-green-100 dark:bg-green-900' :
                      step.color === 'text-orange-600' ? 'bg-orange-100 dark:bg-orange-900' :
                      'bg-purple-100 dark:bg-purple-900'} flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <Badge variant="outline" className="mb-2">{step.step}</Badge>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {step.description}
                    </p>
                  </CardContent>
                  {index < timelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                  )}
                </Card>
              );
            })}
          </div>
        </section>

        {/* Key Legal Factors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Key Legal Factors in Paralysis Cases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalFactors.map((factor, index) => {
              const IconComponent = factor.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IconComponent className="w-6 h-6 mr-3 text-primary" />
                        <CardTitle className="text-lg">{factor.title}</CardTitle>
                      </div>
                      <Badge variant={
                        factor.importance === 'Critical' ? 'destructive' :
                        factor.importance === 'Essential' ? 'default' :
                        'secondary'
                      }>
                        {factor.importance}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{factor.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Compensation Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Types of Compensation Available</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {compensationTypes.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <IconComponent className="w-6 h-6 mr-3 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Legal Rights and Protections */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Your Legal Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gavel className="w-6 h-6 mr-3 text-primary" />
                  Your Legal Rights in California
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Right to Full Compensation</h4>
                    <p className="text-sm text-muted-foreground">Recover all economic and non-economic damages</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Right to Legal Representation</h4>
                    <p className="text-sm text-muted-foreground">No upfront costs, contingency fee arrangement</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Right to Refuse Quick Settlements</h4>
                    <p className="text-sm text-muted-foreground">Take time to understand full extent of damages</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Right to Medical Treatment</h4>
                    <p className="text-sm text-muted-foreground">Choose your own doctors and treatment providers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Privacy Rights</h4>
                    <p className="text-sm text-muted-foreground">Control over personal and medical information</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Legal Mistakes */}
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700 dark:text-orange-300">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Common Legal Mistakes to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Delaying Legal Consultation</h4>
                    <p className="text-sm text-muted-foreground">Evidence disappears quickly, deadlines are strict</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Accepting Quick Settlements</h4>
                    <p className="text-sm text-muted-foreground">Initial offers rarely reflect true case value</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Giving Recorded Statements</h4>
                    <p className="text-sm text-muted-foreground">Can be used against you later in litigation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Inadequate Medical Documentation</h4>
                    <p className="text-sm text-muted-foreground">Poor records weaken your compensation claim</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Social Media Activity</h4>
                    <p className="text-sm text-muted-foreground">Posts can contradict disability claims</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* California-Specific Laws */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-6 h-6 mr-3 text-primary" />
                California-Specific Paralysis Laws & Advantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">Favorable Laws</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                      <span className="text-sm">Pure comparative negligence system</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                      <span className="text-sm">No caps on pain and suffering (non-medical cases)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                      <span className="text-sm">Strong consumer protection laws</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                      <span className="text-sm">Extended deadlines for minors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                      <span className="text-sm">Discovery rule for delayed symptoms</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">Important Deadlines</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />
                      <span className="text-sm">Personal injury: 2 years from injury date</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />
                      <span className="text-sm">Medical malpractice: 1 year from discovery</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />
                      <span className="text-sm">Government claims: 6 months notice</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />
                      <span className="text-sm">Product liability: 2 years from injury</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-orange-600 mr-2 mt-0.5" />
                      <span className="text-sm">Minors: Extended until age 19</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Get Expert Legal Guidance Today</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Don't navigate the complex legal system alone. Our experienced paralysis attorneys are here to guide you through every step.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8"
                  onClick={() => window.location.href = '/practice-areas/paralysis/case-evaluation'}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Free Case Evaluation
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (818) 123-4567
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 mt-6">
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  No Fees Unless We Win
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  <Clock className="w-4 h-4 mr-2" />
                  24/7 Availability
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ParalysisLegalGuidance;