import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Stethoscope,
  AlertTriangle,
  Clock,
  Heart,
  Shield,
  FileText,
  Calendar,
  Users,
  Award
} from 'lucide-react';
import heroBackground from '@/assets/burn-medical-guidance-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const BurnMedicalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Burn Injury Medical Guidance | California Treatment Information"
        description="Comprehensive medical guidance for burn injury victims in California. Expert advice on treatment, recovery, and medical documentation for legal claims."
        canonical="/burn-injuries-medical-guidance"
      />
      
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Burn Injury Medical Guidance
          </h1>
          <p className="text-xl mb-8">
            Expert medical advice and treatment information for burn injury victims in California
          </p>
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
            onClick={() => window.location.href = '/burn-injuries-case-evaluation'}
          >
            Get Medical Case Review
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Immediate Medical Care */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Stethoscope className="w-8 h-8 mr-3 text-red-600" />
                  Immediate Medical Care for Burns
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-bold mb-4">Critical First Steps</h3>
                  <ul className="space-y-2">
                    <li>• Call 911 immediately for severe burns covering large areas</li>
                    <li>• Remove from heat source and stop the burning process</li>
                    <li>• Cool minor burns with lukewarm water for 10-15 minutes</li>
                    <li>• Do NOT use ice, butter, or home remedies</li>
                    <li>• Cover with sterile gauze or clean cloth</li>
                    <li>• Seek immediate emergency care for third-degree burns</li>
                  </ul>
                  
                  <Button 
                    onClick={() => toggleSection('emergency-care')}
                    variant="outline"
                    className="mt-4"
                  >
                    {expandedSections['emergency-care'] ? 'Show Less' : 'Learn More'}
                    {expandedSections['emergency-care'] ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
                  </Button>
                  
                  {expandedSections['emergency-care'] && (
                    <div className="mt-6 p-6 bg-muted rounded-lg">
                      <h4 className="font-bold mb-3">When to Seek Emergency Care</h4>
                      <p>Seek immediate emergency medical attention if:</p>
                      <ul className="mt-3 space-y-2">
                        <li>• Burns cover more than 10% of body surface</li>
                        <li>• Third-degree burns (white, charred, or leathery appearance)</li>
                        <li>• Burns on face, hands, feet, genitals, or major joints</li>
                        <li>• Chemical or electrical burns</li>
                        <li>• Signs of infection (increased pain, swelling, fever, pus)</li>
                        <li>• Difficulty breathing or signs of smoke inhalation</li>
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Burn Classifications */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <AlertTriangle className="w-8 h-8 mr-3 text-red-600" />
                  Understanding Burn Classifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-lg mb-2">First-Degree Burns</h4>
                    <p className="text-sm mb-3">Superficial burns affecting only outer skin layer</p>
                    <ul className="text-sm space-y-1">
                      <li>• Red, painful skin</li>
                      <li>• No blistering</li>
                      <li>• Heals in 3-7 days</li>
                      <li>• Minimal scarring</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Second-Degree Burns</h4>
                    <p className="text-sm mb-3">Partial thickness burns through dermis</p>
                    <ul className="text-sm space-y-1">
                      <li>• Blistering and swelling</li>
                      <li>• Severe pain</li>
                      <li>• Heals in 2-4 weeks</li>
                      <li>• May cause scarring</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Third-Degree Burns</h4>
                    <p className="text-sm mb-3">Full thickness burns through all skin layers</p>
                    <ul className="text-sm space-y-1">
                      <li>• White, charred, or leathery</li>
                      <li>• May be painless initially</li>
                      <li>• Requires surgery</li>
                      <li>• Permanent scarring</li>
                    </ul>
                  </div>
                </div>
                
                <Button 
                  onClick={() => toggleSection('burn-assessment')}
                  variant="outline"
                >
                  {expandedSections['burn-assessment'] ? 'Show Less' : 'Detailed Assessment Guide'}
                  {expandedSections['burn-assessment'] ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
                </Button>
                
                {expandedSections['burn-assessment'] && (
                  <div className="mt-6 p-6 bg-muted rounded-lg">
                    <h4 className="font-bold mb-3">Professional Burn Assessment</h4>
                    <p className="mb-4">Medical professionals assess burns using the "Rule of Nines" to determine body surface area affected:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold mb-2">Adult Body Areas:</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Head and neck: 9%</li>
                          <li>• Each arm: 9%</li>
                          <li>• Chest and abdomen: 18%</li>
                          <li>• Back: 18%</li>
                          <li>• Each leg: 18%</li>
                          <li>• Genitals: 1%</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Burn Severity Indicators:</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Minor: Less than 15% second-degree</li>
                          <li>• Moderate: 15-25% second-degree</li>
                          <li>• Major: More than 25% second-degree</li>
                          <li>• Critical: Any third-degree burn</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Treatment and Recovery */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Heart className="w-8 h-8 mr-3 text-red-600" />
                  Treatment and Recovery Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-bold mb-4">Medical Treatment Phases</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-600 pl-4">
                      <h4 className="font-bold">Acute Care Phase (0-72 hours)</h4>
                      <p>Fluid resuscitation, wound cleaning, pain management, infection prevention</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-bold">Surgical Phase (Days to weeks)</h4>
                      <p>Debridement, skin grafts, reconstructive procedures</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-bold">Rehabilitation Phase (Weeks to months)</h4>
                      <p>Physical therapy, occupational therapy, scar management</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => toggleSection('treatment-details')}
                    variant="outline"
                    className="mt-4"
                  >
                    {expandedSections['treatment-details'] ? 'Show Less' : 'Detailed Treatment Information'}
                    {expandedSections['treatment-details'] ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
                  </Button>
                  
                  {expandedSections['treatment-details'] && (
                    <div className="mt-6 p-6 bg-muted rounded-lg">
                      <h4 className="font-bold mb-3">Comprehensive Treatment Approach</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold">Wound Care Management:</h5>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• Daily wound cleaning and dressing changes</li>
                            <li>• Topical antimicrobial agents</li>
                            <li>• Eschar removal and debridement</li>
                            <li>• Moisture balance maintenance</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold">Surgical Interventions:</h5>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• Split-thickness skin grafts</li>
                            <li>• Full-thickness skin grafts</li>
                            <li>• Flap reconstruction</li>
                            <li>• Tissue expansion procedures</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold">Long-term Care:</h5>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• Scar prevention and management</li>
                            <li>• Physical and occupational therapy</li>
                            <li>• Psychological counseling</li>
                            <li>• Nutritional support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Documentation for Legal Claims */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="w-8 h-8 mr-3 text-red-600" />
                  Medical Documentation for Legal Claims
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-lg mb-4">Proper medical documentation is crucial for your legal claim. Here's what you need:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3">Essential Medical Records:</h4>
                      <ul className="space-y-2">
                        <li>• Emergency room records</li>
                        <li>• Hospital admission records</li>
                        <li>• Surgical reports</li>
                        <li>• Daily progress notes</li>
                        <li>• Discharge summaries</li>
                        <li>• Follow-up visit records</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-3">Supporting Documentation:</h4>
                      <ul className="space-y-2">
                        <li>• Photographs of injuries</li>
                        <li>• Medical imaging results</li>
                        <li>• Physical therapy records</li>
                        <li>• Prescription records</li>
                        <li>• Work restrictions</li>
                        <li>• Future care recommendations</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">
                      <AlertTriangle className="w-5 h-5 inline mr-2" />
                      Keep copies of all medical records and bills. Don't rely solely on insurance companies or medical providers to maintain your documentation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">Get Medical Case Review</h3>
                  <p className="text-center mb-6">
                    Our medical experts can review your burn injury case and help determine the best treatment approach.
                  </p>
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.location.href = '/burn-injuries-case-evaluation'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Free Medical Consultation
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/burn-injuries-compensation-calculator'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Calculate Compensation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Resources */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                    Emergency Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Emergency: 911</p>
                      <p className="text-sm text-muted-foreground">For life-threatening burns</p>
                    </div>
                    <div>
                      <p className="font-medium">Poison Control: 1-800-222-1222</p>
                      <p className="text-sm text-muted-foreground">For chemical burns</p>
                    </div>
                    <div>
                      <p className="font-medium">Burn Centers in California:</p>
                      <ul className="text-sm text-muted-foreground mt-1">
                        <li>• UC Davis Medical Center</li>
                        <li>• USC Verdugo Hills Hospital</li>
                        <li>• UCSF-Fresno</li>
                        <li>• UCSD Medical Center</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Treatment Timeline */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-red-600" />
                    Recovery Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">First-degree</span>
                      <Badge variant="secondary">3-7 days</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Second-degree</span>
                      <Badge variant="secondary">2-4 weeks</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Third-degree</span>
                      <Badge variant="secondary">Months-Years</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurnMedicalGuidance;