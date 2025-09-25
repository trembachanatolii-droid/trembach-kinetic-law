import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Scale, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Phone, 
  Mail,
  FileText,
  Shield,
  DollarSign,
  Users,
  Gavel
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import legalGuidanceHero from '@/assets/personal-injury-legal-guidance-hero.jpg';

const LegalGuidance: React.FC = () => {
  useScrollRestoration();

  const dosList = [
    "Seek immediate medical attention even for seemingly minor injuries",
    "Take photographs of the accident scene and your injuries",
    "Collect contact information from all witnesses",
    "Obtain a copy of the police report if filed",
    "Keep detailed records of all medical treatment and expenses",
    "Document lost wages and work absences",
    "Preserve all physical evidence including damaged property",
    "Follow all medical treatment recommendations",
    "Keep a daily journal of your pain and symptoms",
    "Contact an experienced personal injury attorney quickly"
  ];

  const dontsList = [
    "Don't sign anything from insurance companies without legal review",
    "Don't give recorded statements to opposing insurance carriers",
    "Don't post about your accident on social media platforms",
    "Don't delay in seeking medical treatment",
    "Don't admit fault or apologize at the accident scene",
    "Don't discuss the accident details with anyone except your attorney",
    "Don't accept the first settlement offer from insurance companies",
    "Don't miss medical appointments or ignore treatment recommendations",
    "Don't provide medical records to opposing insurance without authorization",
    "Don't wait to consult with an attorney - evidence disappears quickly"
  ];

  return (
    <div className="min-h-screen bg-background">
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${legalGuidanceHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Personal Injury Legal Guidance Center
          </h1>
          <p className="text-xl mb-6 text-white">
            Comprehensive legal information and guidance for California personal injury victims
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge className="bg-blue-600 text-white">
              <Scale className="w-4 h-4 mr-1" />
              California Law Based
            </Badge>
            <Badge className="bg-green-600 text-white">
              <FileText className="w-4 h-4 mr-1" />
              Expert Guidance
            </Badge>
            <Badge className="bg-purple-600 text-white">
              <Shield className="w-4 h-4 mr-1" />
              Protect Your Rights
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        {/* Immediate Action Guide */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">What to Do After a Personal Injury</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Do's */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  What You SHOULD Do
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {dosList.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Don'ts */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="flex items-center">
                  <XCircle className="w-6 h-6 mr-2" />
                  What You Should NEVER Do
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {dontsList.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* California Personal Injury Law Basics */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">California Personal Injury Law Basics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Scale className="w-5 h-5 mr-2" />
                  Comparative Negligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  California follows "pure comparative negligence," meaning you can recover damages even if you're partially at fault.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Your compensation reduces by your fault percentage</li>
                  <li>• 20% at fault = 80% of total damages</li>
                  <li>• More generous than other states</li>
                  <li>• No total bar to recovery</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Clock className="w-5 h-5 mr-2" />
                  Statute of Limitations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  California generally gives you two years from the injury date to file a personal injury lawsuit.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Medical malpractice: 1-3 years</li>
                  <li>• Government claims: 6 months notice</li>
                  <li>• Discovery rule may extend deadlines</li>
                  <li>• Missing deadlines bars your claim</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Types of Damages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  California allows recovery of both economic and non-economic damages in personal injury cases.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Medical expenses (past/future)</li>
                  <li>• Lost wages and earning capacity</li>
                  <li>• Pain and suffering</li>
                  <li>• Emotional distress</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Types of Personal Injury Cases */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Common Types of Personal Injury Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {[
              {
                title: "Motor Vehicle Accidents",
                description: "Car, truck, motorcycle, bicycle, and pedestrian accidents",
                details: [
                  "5.5 million accidents annually nationwide",
                  "California has highest number of traffic fatalities",
                  "Multiple insurance policies may apply",
                  "Uninsured motorist coverage important"
                ]
              },
              {
                title: "Premises Liability",
                description: "Slip and falls, trip and falls, inadequate security",
                details: [
                  "Property owners have duty to maintain safety",
                  "Different duties for invitees vs. trespassers",
                  "Notice requirements for dangerous conditions",
                  "Security negligence in crime cases"
                ]
              },
              {
                title: "Medical Malpractice",
                description: "Healthcare provider negligence causing patient harm",
                details: [
                  "Must prove breach of standard of care",
                  "MICRA caps non-economic damages",
                  "Expert medical testimony required",
                  "Shorter statute of limitations"
                ]
              },
              {
                title: "Product Liability",
                description: "Defective products causing consumer injuries",
                details: [
                  "Strict liability - no need to prove negligence",
                  "Design defects, manufacturing flaws, warnings",
                  "Multiple defendants in supply chain",
                  "Federal preemption issues in some cases"
                ]
              },
              {
                title: "Workplace Injuries",
                description: "On-the-job accidents with third-party liability",
                details: [
                  "Workers' comp provides limited benefits",
                  "Third-party claims allow full recovery",
                  "Equipment manufacturers often liable",
                  "Coordination of multiple claims"
                ]
              },
              {
                title: "Wrongful Death",
                description: "Death caused by another's negligence",
                details: [
                  "Surviving family members can recover",
                  "Lost financial support and companionship",
                  "Funeral and burial expenses",
                  "Two-year statute of limitations"
                ]
              }
            ].map((caseType, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{caseType.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 font-medium">{caseType.description}</p>
                  <ul className="text-sm space-y-1">
                    {caseType.details.map((detail, idx) => (
                      <li key={idx}>• {detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* The Legal Process */}
        <section className="bg-muted p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">The Personal Injury Legal Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {[
              {
                step: 1,
                title: "Initial Consultation",
                description: "Free case evaluation to assess your claim's strength and potential value"
              },
              {
                step: 2,
                title: "Investigation",
                description: "Gather evidence, interview witnesses, obtain medical records and expert opinions"
              },
              {
                step: 3,
                title: "Demand & Negotiation",
                description: "Submit comprehensive demand package and negotiate with insurance companies"
              },
              {
                step: 4,
                title: "Resolution",
                description: "Achieve settlement or proceed to trial if necessary for fair compensation"
              }
            ].map((phase) => (
              <Card key={phase.step} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-2">
                    {phase.step}
                  </div>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Evidence Collection */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Critical Evidence in Personal Injury Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
              {
                icon: FileText,
                title: "Medical Records",
                items: [
                  "Emergency room reports",
                  "Hospital records",
                  "Doctor visit notes",
                  "Diagnostic imaging",
                  "Treatment plans",
                  "Physical therapy records"
                ]
              },
              {
                icon: Users,
                title: "Witness Information",
                items: [
                  "Eyewitness accounts",
                  "Contact information", 
                  "Written statements",
                  "Video testimonies",
                  "Expert witness opinions",
                  "Character witnesses"
                ]
              },
              {
                icon: Shield,
                title: "Accident Documentation",
                items: [
                  "Police reports",
                  "Incident reports",
                  "Scene photographs",
                  "Property damage photos",
                  "Surveillance footage",
                  "Accident reconstruction"
                ]
              }
            ].map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <category.icon className="w-5 h-5 mr-2 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Insurance Company Tactics */}
        <section className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-red-700">Common Insurance Company Tactics</h2>
          <p className="text-lg mb-6">
            Insurance companies are businesses focused on minimizing payouts. Understanding their tactics helps you protect your rights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Tactics They Use</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Quick settlement offers before you know full extent of injuries</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Requesting recorded statements to find inconsistencies</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Surveillance to catch you doing activities despite injury claims</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Social media monitoring for contradictory evidence</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Delaying claims hoping you'll accept less due to financial pressure</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">How to Protect Yourself</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Don't give recorded statements without attorney present</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Avoid social media posts about your accident or activities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Don't sign any documents without legal review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Document everything and maintain detailed records</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Consult with an attorney before making any decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* When to Hire an Attorney */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">When You Need a Personal Injury Attorney</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">You Definitely Need an Attorney If:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "You suffered severe or permanent injuries",
                    "Medical expenses exceed $10,000",
                    "You'll miss significant work time",
                    "Liability is disputed or unclear",
                    "Multiple parties were involved",
                    "Insurance company denies your claim",
                    "You're offered a settlement that seems low",
                    "The accident involved a government entity",
                    "Product liability is involved",
                    "Medical malpractice occurred"
                  ].map((situation, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{situation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Benefits of Professional Representation:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "40% higher settlements on average",
                    "Knowledge of insurance company tactics",
                    "Access to medical and expert witnesses", 
                    "Understanding of complex legal procedures",
                    "Ability to investigate and preserve evidence",
                    "Negotiation skills and experience",
                    "Trial representation if needed",
                    "Contingency fee - no upfront costs",
                    "Peace of mind during recovery",
                    "Maximum compensation recovery"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Get Help Section */}
        <section className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Get Professional Legal Guidance</h2>
          <p className="text-xl mb-6">
            Don't navigate the complex legal system alone. Our experienced California personal injury attorneys are here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => window.location.href = '/practice-areas/general-personal-injury/case-evaluation'}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get Free Case Evaluation
            </Button>
            <Button 
              size="lg"
              onClick={() => window.location.href = 'tel:8181234567'}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567
            </Button>
            <Button 
              size="lg"
              onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-90">Available 24/7 • No fees unless we win • Free consultation</p>
        </section>
      </div>
    </div>
  );
};

export default LegalGuidance;