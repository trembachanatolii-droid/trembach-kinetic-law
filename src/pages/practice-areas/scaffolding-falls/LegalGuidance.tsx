import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import scaffoldingLegalImage from '@/assets/scaffolding-legal-guidance-hero.jpg';

const ScaffoldingFallsLegalGuidance: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Scaffolding Falls Legal Guidance - California Construction Law"
        description="Expert legal guidance for scaffolding falls accidents. Understanding your rights, OSHA regulations, and compensation options in California."
        canonical="https://www.trembachlawfirm.com/practice-areas/scaffolding-falls/legal-guidance"
        keywords="scaffolding falls legal guidance, construction accident law, OSHA violations, California construction accidents, scaffolding injury lawyer"
      />

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${scaffoldingLegalImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Scaffolding Falls Legal Guidance
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            Understanding Your Rights After a Construction Accident
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <a href="tel:8181234567" className="text-primary-foreground hover:!text-primary-foreground">
                Get Legal Guidance: Call (818) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </section>

      <GoBack className="container mx-auto px-8 pt-8" />

      <div className="container mx-auto px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content - Left 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Your Rights Under California Law */}
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Your Rights Under California Law</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    California provides comprehensive protections for construction workers injured in scaffolding accidents. 
                    Understanding your rights is crucial for obtaining fair compensation and ensuring workplace safety improvements.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Third-Party Liability Claims</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Right to sue scaffold manufacturers for defective equipment</li>
                    <li>• Claims against property owners for unsafe working conditions</li>
                    <li>• Legal action against general contractors for inadequate safety measures</li>
                    <li>• Subcontractor liability for improper scaffolding installation</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">OSHA Protection Rights</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Right to a safe workplace free from recognized hazards</li>
                    <li>• Protection from retaliation for reporting safety violations</li>
                    <li>• Right to refuse unsafe work without penalty</li>
                    <li>• Access to safety training and protective equipment</li>
                  </ul>
                </div>
              </Card>

              {/* OSHA Regulations & Safety Standards */}
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">OSHA Regulations & Safety Standards</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Occupational Safety and Health Administration (OSHA) has established specific regulations 
                    for scaffolding safety in construction. Violations of these standards can strengthen your legal case.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Key OSHA Scaffolding Standards</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• 29 CFR 1926.451 - General requirements for scaffolds</li>
                    <li>• Proper platform construction and guardrail systems</li>
                    <li>• Fall protection requirements for workers on scaffolds</li>
                    <li>• Regular inspection and maintenance protocols</li>
                    <li>• Competent person supervision requirements</li>
                    <li>• Training requirements for scaffold erectors and users</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Common OSHA Violations</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Missing or inadequate guardrails</li>
                    <li>• Insufficient planking or platform materials</li>
                    <li>• Lack of fall protection systems</li>
                    <li>• Improper scaffold assembly or erection</li>
                    <li>• Inadequate worker training and supervision</li>
                    <li>• Failure to conduct required inspections</li>
                  </ul>
                </div>
              </Card>

              {/* Legal Process Timeline */}
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Legal Process Timeline</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Immediate Actions (First 24-48 Hours)</h4>
                      <p className="text-muted-foreground">Seek medical attention, report the accident, document the scene, and contact an attorney.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Investigation Phase (1-3 Months)</h4>
                      <p className="text-muted-foreground">Gather evidence, interview witnesses, review safety records, and consult with experts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Case Filing (3-6 Months)</h4>
                      <p className="text-muted-foreground">File necessary legal documents and begin formal legal proceedings against responsible parties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Discovery & Negotiations (6-18 Months)</h4>
                      <p className="text-muted-foreground">Exchange information with opposing parties and attempt to reach a settlement agreement.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold">Resolution (12-24 Months)</h4>
                      <p className="text-muted-foreground">Finalize settlement agreement or proceed to trial for maximum compensation.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Critical Deadlines */}
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Critical Deadlines</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">⚠ Time is Critical</h4>
                    <p className="text-red-700">
                      Missing these deadlines can permanently bar your right to compensation. 
                      Contact an attorney immediately to protect your rights.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">California Statute of Limitations</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Personal Injury Claims:</strong> 2 years from the date of accident</li>
                    <li>• <strong>Property Damage Claims:</strong> 3 years from the date of discovery</li>
                    <li>• <strong>Wrongful Death Claims:</strong> 2 years from the date of death</li>
                    <li>• <strong>Government Entity Claims:</strong> 6 months notice requirement</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Important Reporting Deadlines</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Employer Notification:</strong> Immediately (within 30 days recommended)</li>
                    <li>• <strong>OSHA Reporting:</strong> 8 hours for fatalities, 24 hours for hospitalizations</li>
                    <li>• <strong>Insurance Claims:</strong> As soon as possible (typically 30-60 days)</li>
                    <li>• <strong>Evidence Preservation:</strong> Immediate action required</li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Sidebar - Right column */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Get Expert Legal Guidance</h3>
                  <p className="text-muted-foreground mb-6">
                    Don't navigate the complex legal system alone. Our experienced attorneys 
                    specialize in scaffolding falls cases and know how to maximize your compensation.
                  </p>
                  
                  <div className="space-y-4">
                    <Button size="lg" className="w-full text-lg py-4">
                      <a href="tel:8181234567" className="text-primary-foreground hover:!text-primary-foreground">
                        Call (818) 123-4567
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full text-lg py-4">
                      Schedule Free Consultation
                    </Button>
                  </div>

                  <div className="mt-6 text-sm text-muted-foreground">
                    <p>✓ Free case evaluation</p>
                    <p>✓ No fees unless we win</p>
                    <p>✓ Available 24/7</p>
                    <p>✓ Se habla español</p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Common Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">What if I was partially at fault?</h4>
                      <p className="text-sm text-muted-foreground">
                        California follows comparative negligence rules. You may still recover compensation 
                        even if you were partially responsible for the accident.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Can I sue my employer?</h4>
                      <p className="text-sm text-muted-foreground">
                        Generally no, but you may have claims against third parties like equipment 
                        manufacturers, property owners, or other contractors.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">How much is my case worth?</h4>
                      <p className="text-sm text-muted-foreground">
                        Case value depends on injury severity, medical costs, lost wages, 
                        and degree of negligence. Our calculator can provide estimates.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Related Resources</h3>
                  <div className="space-y-3">
                    <a href="/practice-areas/scaffolding-falls/compensation-calculator" 
                       className="block text-primary hover:underline">
                      → Compensation Calculator
                    </a>
                    <a href="/practice-areas/scaffolding-falls/case-evaluation" 
                       className="block text-primary hover:underline">
                      → Free Case Evaluation
                    </a>
                    <a href="/practice-areas/scaffolding-falls" 
                       className="block text-primary hover:underline">
                      → Scaffolding Falls Overview
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaffoldingFallsLegalGuidance;