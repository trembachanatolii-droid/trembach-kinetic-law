import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Scale, 
  Shield, 
  FileText, 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Users, 
  Building,
  ChevronDown,
  ChevronUp,
  Phone,
  Gavel,
  BookOpen,
  Award,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import '../retail-accidents.css';
import heroBackground from '@/assets/practice-areas/retail-legal-guidance-hero.jpg';
import legalConsultationImage from '@/assets/practice-areas/legal-consultation-retail.jpg';
import californiaLawImage from '@/assets/practice-areas/california-premises-law.jpg';

const LegalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="retail-accidents-page">
      {/* 3D Background Layers */}
      <div className="floating-layer-back"></div>
      <div className="floating-layer-mid"></div>
      <div className="floating-layer-front"></div>
      
      <SEO
        title="Retail Store Accident Legal Guidance | California Law | Trembach Law Firm"
        description="Complete guide to California retail store accident law, your rights, and legal options. Expert guidance from former defense attorney."
        keywords="California retail accident law, premises liability guide, shopping injury rights, store accident legal help"
      />

      <GoBack fallbackPath="/practice-areas/retail-accidents" />

      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            California Retail Store Accident Legal Guide
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            Complete Legal Guidance from Former Defense Attorney
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg">
              <Link to="/practice-areas/retail-accidents/case-evaluation">
                Get Free Legal Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg backdrop-blur-sm">
              <a href="tel:(818) 123-4567">
                Call (818) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Quick Navigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    <a href="#overview" className="block text-sm hover:text-primary transition-colors">Overview of California Law</a>
                    <a href="#your-rights" className="block text-sm hover:text-primary transition-colors">Your Legal Rights</a>
                    <a href="#premises-liability" className="block text-sm hover:text-primary transition-colors">Premises Liability</a>
                    <a href="#store-duties" className="block text-sm hover:text-primary transition-colors">Store Legal Duties</a>
                    <a href="#compensation" className="block text-sm hover:text-primary transition-colors">Types of Compensation</a>
                    <a href="#legal-process" className="block text-sm hover:text-primary transition-colors">Legal Process</a>
                    <a href="#time-limits" className="block text-sm hover:text-primary transition-colors">Time Limits</a>
                    <a href="#evidence" className="block text-sm hover:text-primary transition-colors">Evidence & Documentation</a>
                  </nav>
                </CardContent>
              </Card>

              <Card className="glass-card bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Need Legal Help?</h3>
                  <p className="text-sm mb-4">Get professional guidance from experienced retail accident attorneys</p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <a href="tel:(818) 123-4567">Call Now: (818) 123-4567</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Overview Section */}
            <section id="overview" className="content-section">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-3xl text-primary">
                    <BookOpen className="w-8 h-8" />
                    California Retail Store Accident Law Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed">
                      California premises liability law provides strong protections for customers injured in retail stores. 
                      Under California Civil Code Section 1714, property owners have a fundamental duty to exercise 
                      ordinary care in managing their property to avoid exposing others to unreasonable risk of harm.
                    </p>
                    
                    <img 
                      src={californiaLawImage} 
                      alt="California courthouse and legal scales representing premises liability law" 
                      className="w-full h-64 object-cover rounded-lg shadow-lg my-6"
                    />
                    
                    <p className="text-lg leading-relaxed">
                      For retail establishments, this duty extends beyond basic maintenance to include regular inspections, 
                      prompt hazard correction, adequate warnings, and implementation of reasonable safety measures. 
                      California courts have consistently held retailers to the highest standard of care for business invitees.
                    </p>
                  </div>

                  <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        Learn More About California Premises Liability Standards
                        {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-6 space-y-4">
                      <div className="bg-muted p-6 rounded-lg">
                        <h4 className="font-semibold text-primary mb-3">Key California Legal Precedents</h4>
                        <ul className="space-y-3">
                          <li><strong>Ortega v. Kmart Corp. (2001):</strong> Established that stores must have reasonable inspection procedures</li>
                          <li><strong>Moore v. Wal-Mart Stores (2003):</strong> Clarified the "mode of operation" liability standard</li>
                          <li><strong>Hatfield v. Levy Bros. (1941):</strong> Foundational case on business invitee duty of care</li>
                          <li><strong>Louie v. Hagstrom's Food Stores (1947):</strong> Self-service store liability principles</li>
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </section>

            {/* Your Rights Section */}
            <section id="your-rights" className="content-section">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                    <Scale className="w-6 h-6" />
                    Your Legal Rights as a California Retail Customer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-l-4 border-l-green-500">
                      <CardHeader>
                        <CardTitle className="text-lg text-green-700">Fundamental Rights</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Right to reasonably safe premises</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Right to adequate warnings of hazards</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Right to prompt hazard correction</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Right to reasonable inspection procedures</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-blue-500">
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-700">Legal Protections</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Protection from retaliation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Right to legal representation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Right to refuse inadequate settlements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>Privacy protection for medical records</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Premises Liability Section */}
            <section id="premises-liability" className="content-section">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                    <Building className="w-6 h-6" />
                    Understanding Premises Liability in Retail Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg">
                    Premises liability in California retail settings operates under specific legal frameworks 
                    that establish when stores can be held responsible for customer injuries.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="text-center p-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">Actual Notice</h4>
                      <p className="text-sm text-muted-foreground">Store knew about the hazard but failed to address it</p>
                    </Card>
                    
                    <Card className="text-center p-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">Constructive Notice</h4>
                      <p className="text-sm text-muted-foreground">Hazard existed long enough for reasonable discovery</p>
                    </Card>
                    
                    <Card className="text-center p-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">Created Hazard</h4>
                      <p className="text-sm text-muted-foreground">Store employees caused the dangerous condition</p>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Store Duties Section */}
            <section id="store-duties" className="content-section">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                    <Gavel className="w-6 h-6" />
                    Legal Duties Retail Stores Must Follow
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <img 
                    src={legalConsultationImage} 
                    alt="Legal consultation with retail accident documents and case materials" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  
                  <div className="space-y-4">
                    <div className="p-4 border-l-4 border-l-primary bg-primary/5">
                      <h4 className="font-semibold text-primary mb-2">Duty to Inspect</h4>
                      <p className="text-sm">Regular and reasonable inspection of all customer areas to identify potential hazards before they cause injuries.</p>
                    </div>
                    
                    <div className="p-4 border-l-4 border-l-primary bg-primary/5">
                      <h4 className="font-semibold text-primary mb-2">Duty to Maintain</h4>
                      <p className="text-sm">Keep premises in reasonably safe condition through proper maintenance, repairs, and hazard elimination.</p>
                    </div>
                    
                    <div className="p-4 border-l-4 border-l-primary bg-primary/5">
                      <h4 className="font-semibold text-primary mb-2">Duty to Warn</h4>
                      <p className="text-sm">Provide adequate warnings of non-obvious hazards that cannot be immediately corrected.</p>
                    </div>
                    
                    <div className="p-4 border-l-4 border-l-primary bg-primary/5">
                      <h4 className="font-semibold text-primary mb-2">Duty to Train</h4>
                      <p className="text-sm">Ensure employees are properly trained in safety procedures, hazard recognition, and emergency response.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                    <DollarSign className="w-6 h-6" />
                    Types of Compensation Available in California
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Economic Damages</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Medical expenses (past and future)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Lost wages and earning capacity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Property damage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Rehabilitation costs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Home modification expenses</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Non-Economic Damages</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Pain and suffering</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Emotional distress</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Loss of life enjoyment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Disfigurement/scarring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Loss of consortium</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Time Limits Section */}
            <section id="time-limits" className="content-section">
              <Card className="glass-card border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-amber-800">
                    <AlertTriangle className="w-6 h-6" />
                    Critical Time Limits in California
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">Statute of Limitations</h4>
                    <p className="text-sm text-amber-700">
                      <strong>2 Years:</strong> General time limit to file personal injury claims from date of accident
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">Discovery Rule</h4>
                    <p className="text-sm text-amber-700">
                      In cases where injuries aren't immediately apparent, the 2-year period may begin when the injury is discovered
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">Government Claims</h4>
                    <p className="text-sm text-amber-700">
                      <strong>6 Months:</strong> Special shortened deadline if accident occurred on government property
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Final CTA */}
            <section className="content-section">
              <Card className="glass-card bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                <CardContent className="p-8 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Get Expert Legal Guidance Today
                  </h3>
                  <p className="text-lg mb-6">
                    Don't navigate California retail accident law alone. Get experienced legal guidance 
                    from attorneys who understand both sides of these cases.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg">
                      <Link to="/practice-areas/retail-accidents/case-evaluation">
                        Start Free Case Evaluation
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 text-lg">
                      <a href="tel:(818) 123-4567">
                        Call (818) 123-4567
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    No fees unless we win • Available 24/7 • Free consultation
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalGuidance;