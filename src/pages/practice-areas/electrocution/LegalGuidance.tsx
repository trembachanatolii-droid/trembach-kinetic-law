import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Shield, 
  Scale, 
  FileText, 
  AlertTriangle, 
  Clock, 
  Users, 
  CheckCircle, 
  XCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Book,
  Gavel,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/electrocution-legal-process.jpg';
import SEO from '@/components/SEO';

const ElectrocutionLegalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const legalSteps = [
    {
      step: 1,
      title: "Immediate Legal Action",
      description: "Preserve evidence, document the scene, and protect your rights",
      timeframe: "Within 24-48 hours",
      critical: true
    },
    {
      step: 2,
      title: "Case Investigation",
      description: "Thorough investigation of the electrical hazard and safety violations",
      timeframe: "1-4 weeks",
      critical: false
    },
    {
      step: 3,
      title: "Medical Documentation",
      description: "Compile comprehensive medical records and expert opinions",
      timeframe: "2-8 weeks",
      critical: true
    },
    {
      step: 4,
      title: "Liability Assessment",
      description: "Identify all responsible parties and insurance coverage",
      timeframe: "4-12 weeks",
      critical: false
    },
    {
      step: 5,
      title: "Demand & Negotiation",
      description: "Present demand package and negotiate with insurers",
      timeframe: "3-6 months",
      critical: false
    },
    {
      step: 6,
      title: "Litigation if Needed",
      description: "File lawsuit if fair settlement cannot be reached",
      timeframe: "6 months - 2 years",
      critical: false
    }
  ];

  const californiaLaws = [
    {
      title: "California Civil Code Section 1714",
      description: "General negligence law establishing duty of care",
      relevance: "Applies to property owners and electrical system maintainers"
    },
    {
      title: "California Labor Code Section 6400",
      description: "Workplace safety requirements for electrical hazards",
      relevance: "Covers construction sites and industrial workplaces"
    },
    {
      title: "California Code of Civil Procedure Section 335.1",
      description: "Two-year statute of limitations for personal injury",
      relevance: "Time limit to file electrical injury lawsuit"
    },
    {
      title: "California Health & Safety Code Section 18943",
      description: "Electrical safety standards and code enforcement",
      relevance: "Building and electrical code compliance requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Electrocution Legal Guidance | Electrical Injury Law"
        description="Complete legal guidance for California electrocution cases. Know your rights, legal process, and how to protect your electrical injury claim."
        keywords="California electrocution law, electrical injury legal guidance, electrical accident attorney advice"
        canonical="/practice-areas/electrocution/legal-guidance"
      />

      <GoBack fallbackPath="/practice-areas/electrocution" />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            California Electrocution Legal Guidance
          </h1>
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-white">Expert Legal Guidance</span>
          </div>
          <p className="text-xl text-white">
            Know your rights and legal options for electrical injury cases
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link to="/practice-areas/electrocution/case-evaluation">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <Scale className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Free Case Evaluation</h3>
                <p className="text-sm text-muted-foreground">Get your case reviewed by experienced attorneys</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/practice-areas/electrocution/compensation-calculator">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Compensation Calculator</h3>
                <p className="text-sm text-muted-foreground">Estimate your potential case value</p>
              </CardContent>
            </Card>
          </Link>
          
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-destructive">Urgent Cases</h3>
              <p className="text-sm text-destructive/80 mb-3">Severe injuries need immediate attention</p>
              <Button size="sm" className="bg-destructive hover:bg-destructive/90">
                Call (818) 123-4567
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Legal Process Steps */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Legal Process for Electrocution Cases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {legalSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                    step.critical ? 'bg-destructive' : 'bg-primary'
                  }`}>
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      {step.critical && (
                        <Badge variant="destructive" className="text-xs">
                          Critical
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {step.timeframe}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-6 h-6" />
              Your Rights After an Electrical Accident
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  You Have the Right To:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Seek immediate medical attention at no cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Refuse to give recorded statements to insurance companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Have an attorney present during all interviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Pursue compensation from all responsible parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Access all medical records and accident reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Take time to consider settlement offers</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  You Are NOT Required To:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Accept the first settlement offer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Pay attorney fees upfront</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Sign documents without attorney review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Provide detailed statements immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Return to work before medical clearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Handle your case without legal representation</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* California Laws */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gavel className="w-6 h-6" />
              Key California Laws for Electrical Injuries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {californiaLaws.map((law, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-primary mb-2">{law.title}</h3>
                  <p className="text-muted-foreground mb-2">{law.description}</p>
                  <p className="text-sm text-blue-600 font-medium">{law.relevance}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Legal Topics */}
        <div className="space-y-6">
          
          {/* Statute of Limitations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-6 h-6" />
                California Statute of Limitations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <h3 className="font-semibold text-destructive mb-2">Critical Time Limits</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Personal Injury:</strong> 2 years from date of injury</li>
                    <li><strong>Property Damage:</strong> 3 years from date of damage</li>
                    <li><strong>Government Claims:</strong> 6 months to file claim</li>
                    <li><strong>Product Liability:</strong> 2 years from discovery of defect</li>
                    <li><strong>Wrongful Death:</strong> 2 years from date of death</li>
                  </ul>
                </div>

                <Collapsible 
                  open={expandedSections['statute-details']} 
                  onOpenChange={() => toggleSection('statute-details')}
                >
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="text-primary font-semibold">
                      Learn More About Time Limits
                      {expandedSections['statute-details'] ? (
                        <ChevronUp className="w-4 h-4 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-2" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-4 mt-4">
                      <h4 className="font-semibold">Discovery Rule</h4>
                      <p>In some cases, the statute of limitations begins when you discover or reasonably should have discovered the injury and its cause. This can be important for electrical injuries with delayed symptoms.</p>
                      
                      <h4 className="font-semibold">Exceptions</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>Minors: Statute may not begin until 18th birthday</li>
                        <li>Mental incapacity: Time limits may be extended</li>
                        <li>Defendant left California: Time may be paused</li>
                        <li>Fraudulent concealment: Statute may be extended</li>
                      </ul>

                      <h4 className="font-semibold">Government Entity Claims</h4>
                      <p>Claims against government entities (cities, counties, state) have much shorter deadlines - often just 6 months to file a formal claim.</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
          </Card>

          {/* Liability Parties */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                Who Can Be Held Liable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Primary Defendants</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Property owners and landlords</li>
                    <li>• General contractors and subcontractors</li>
                    <li>• Utility companies</li>
                    <li>• Equipment manufacturers</li>
                    <li>• Employers (third-party claims)</li>
                    <li>• Electrical contractors</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Secondary Defendants</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Architects and engineers</li>
                    <li>• Safety consultants</li>
                    <li>• Inspection companies</li>
                    <li>• Equipment installers</li>
                    <li>• Maintenance companies</li>
                    <li>• Government entities</li>
                  </ul>
                </div>
              </div>

              <Collapsible 
                open={expandedSections['liability-details']} 
                onOpenChange={() => toggleSection('liability-details')}
              >
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="text-primary font-semibold mt-4">
                    Detailed Liability Analysis
                    {expandedSections['liability-details'] ? (
                      <ChevronUp className="w-4 h-4 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-2" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="space-y-4 mt-4">
                    <h4 className="font-semibold">Premises Liability</h4>
                    <p>Property owners have a duty to maintain safe electrical systems and warn of known hazards. This includes regular inspection and maintenance of electrical equipment.</p>
                    
                    <h4 className="font-semibold">Product Liability</h4>
                    <p>Manufacturers can be held strictly liable for defective electrical equipment, even without proof of negligence. This includes design defects, manufacturing defects, and inadequate warnings.</p>

                    <h4 className="font-semibold">Construction Site Liability</h4>
                    <p>Construction sites have complex liability involving multiple parties. General contractors often have overall safety responsibility, while subcontractors may be liable for their specific work areas.</p>

                    <h4 className="font-semibold">Utility Company Liability</h4>
                    <p>Utility companies can be liable for inadequate maintenance of power lines, failure to respond to hazard reports, or improper installation of electrical equipment.</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Types of Claims */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Types of Legal Claims
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Negligence</h3>
                      <p className="text-sm text-muted-foreground">
                        Failure to exercise reasonable care in maintaining electrical safety or following safety standards.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Premises Liability</h3>
                      <p className="text-sm text-muted-foreground">
                        Property owner's duty to maintain safe conditions and warn of electrical hazards.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Product Liability</h3>
                      <p className="text-sm text-muted-foreground">
                        Manufacturer liability for defective electrical equipment or inadequate safety warnings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Workplace Safety Violations</h3>
                      <p className="text-sm text-muted-foreground">
                        Violations of Cal/OSHA electrical safety standards in workplace settings.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Wrongful Death</h3>
                      <p className="text-sm text-muted-foreground">
                        Claims by family members when electrical accidents result in death.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Loss of Consortium</h3>
                      <p className="text-sm text-muted-foreground">
                        Spouse's claim for loss of companionship and support due to electrical injuries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Evidence Preservation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-6 h-6" />
                Evidence Preservation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Critical Evidence Can Disappear Quickly</h3>
                  <p className="text-yellow-700 text-sm">
                    Electrical equipment may be repaired, moved, or destroyed shortly after an accident. 
                    Immediate action is essential to preserve crucial evidence.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Physical Evidence</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Electrical equipment involved</li>  
                      <li>• Damaged wiring or components</li>
                      <li>• Safety equipment (or lack thereof)</li>
                      <li>• Scene photographs</li>
                      <li>• Electrical panels and breakers</li>
                      <li>• Extension cords and tools</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Documentary Evidence</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Maintenance records</li>
                      <li>• Inspection reports</li>
                      <li>• Safety training records</li>
                      <li>• Building permits</li>
                      <li>• OSHA violations</li>
                      <li>• Witness statements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Get Help Section */}
        <Card className="mt-12 border-primary/20 bg-primary/5">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Legal Guidance?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Don't navigate the complex legal process alone. Get experienced guidance for your electrical injury case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Call (818) 123-4567
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/practice-areas/electrocution/case-evaluation">
                  Free Case Evaluation
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No fees unless we win your case
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ElectrocutionLegalGuidance;