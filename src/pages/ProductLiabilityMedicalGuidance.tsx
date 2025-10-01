import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  ArrowLeft,
  BookOpen,
  Heart,
  Users,
  Clock,
  AlertTriangle,
  Phone,
  Mail,
  Shield,
  Activity,
  FileText,
  Brain,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  Info,
  HelpCircle,
  Scale,
  DollarSign,
  Package,
  Zap,
  Calculator
} from 'lucide-react';
import heroBackground from '@/assets/product-liability-medical-guidance-hero.jpg';
import SEO from '@/components/SEO';

const ProductLiabilityMedicalGuidance: React.FC = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const medicalTopics = [
    {
      id: 'immediate-response',
      title: 'Immediate Response to Product-Related Injuries',
      icon: AlertTriangle,
      summary: 'Essential steps to take immediately after a product-related injury occurs.',
      content: `
        <h3>First Priority: Seek Medical Attention</h3>
        <p>Your health and safety are the top priority. Even if injuries seem minor, seek medical evaluation:</p>
        
        <h4>When to Call 911:</h4>
        <ul>
          <li>Severe bleeding that won't stop</li>
          <li>Burns covering large areas or third-degree burns</li>
          <li>Difficulty breathing or chest pain</li>
          <li>Loss of consciousness or severe head injury</li>
          <li>Suspected poisoning or toxic exposure</li>
          <li>Electrical shock with ongoing symptoms</li>
          <li>Severe allergic reactions</li>
        </ul>
        
        <h4>Emergency Room vs. Urgent Care:</h4>
        <ul>
          <li><strong>Emergency Room:</strong> Life-threatening injuries, severe burns, head trauma, poisoning</li>
          <li><strong>Urgent Care:</strong> Moderate cuts requiring stitches, minor burns, sprains</li>
          <li><strong>Primary Care:</strong> Minor injuries, follow-up care, ongoing symptoms</li>
        </ul>

        <h3>Preserve the Evidence</h3>
        <h4>Product Preservation:</h4>
        <ul>
          <li>Do not throw away the defective product</li>
          <li>Do not attempt repairs or modifications</li>
          <li>Store the product in a safe location</li>
          <li>Keep all packaging, instructions, and receipts</li>
          <li>Take photographs from multiple angles</li>
        </ul>
        
        <h4>Medical Documentation:</h4>
        <ul>
          <li>Get copies of all medical records</li>
          <li>Keep receipts for medical expenses</li>
          <li>Document symptoms and recovery progress</li>
          <li>Follow all medical treatment recommendations</li>
        </ul>

        <h3>Important "Don'ts"</h3>
        <ul>
          <li>Don't delay medical treatment</li>
          <li>Don't dispose of the product or packaging</li>
          <li>Don't give statements to insurance companies without legal advice</li>
          <li>Don't sign any waivers or releases</li>
          <li>Don't post about the incident on social media</li>
        </ul>
      `
    },
    {
      id: 'common-product-injuries',
      title: 'Common Product-Related Injuries and Treatment',
      icon: Stethoscope,
      summary: 'Understanding different types of product-related injuries and their medical treatment.',
      content: `
        <h3>Chemical and Toxic Exposure Injuries</h3>
        
        <h4>Skin Contact:</h4>
        <ul>
          <li><strong>Immediate Treatment:</strong> Remove contaminated clothing, flush with water for 15-20 minutes</li>
          <li><strong>Chemical Burns:</strong> May require specialized burn treatment and skin grafts</li>
          <li><strong>Allergic Reactions:</strong> Range from mild irritation to severe anaphylaxis</li>
          <li><strong>Long-term Effects:</strong> Permanent scarring, sensitization, chronic dermatitis</li>
        </ul>
        
        <h4>Inhalation Exposure:</h4>
        <ul>
          <li><strong>Acute Symptoms:</strong> Coughing, wheezing, shortness of breath</li>
          <li><strong>Treatment:</strong> Oxygen therapy, bronchodilators, corticosteroids</li>
          <li><strong>Chronic Effects:</strong> Asthma, lung damage, respiratory sensitization</li>
        </ul>
        
        <h4>Ingestion:</h4>
        <ul>
          <li><strong>Immediate Care:</strong> Contact Poison Control (1-800-222-1222)</li>
          <li><strong>Do NOT induce vomiting unless specifically instructed</li>
          <li><strong>Bring product container to hospital</li>
          <li><strong>Long-term monitoring for organ damage</li>
        </ul>

        <h3>Burn Injuries from Defective Products</h3>
        
        <h4>Types of Burns:</h4>
        <ul>
          <li><strong>Thermal Burns:</strong> From overheating appliances, defective electronics</li>
          <li><strong>Chemical Burns:</strong> From leaking batteries, cleaning products</li>
          <li><strong>Electrical Burns:</strong> From faulty wiring, defective electronics</li>
        </ul>
        
        <h4>Burn Severity Classification:</h4>
        <ul>
          <li><strong>First Degree:</strong> Red, painful skin (minor sunburn-like)</li>
          <li><strong>Second Degree:</strong> Blistering, severe pain, possible scarring</li>
          <li><strong>Third Degree:</strong> Deep tissue damage, may require surgery</li>
          <li><strong>Fourth Degree:</strong> Damage to muscle and bone</li>
        </ul>
        
        <h4>Treatment and Recovery:</h4>
        <ul>
          <li>Immediate cooling with cool (not ice-cold) water</li>
          <li>Professional wound care and dressing changes</li>
          <li>Pain management with appropriate medications</li>
          <li>Physical therapy to prevent contractures</li>
          <li>Possible reconstructive surgery for severe burns</li>
        </ul>

        <h3>Mechanical Injuries</h3>
        
        <h4>Cuts and Lacerations:</h4>
        <ul>
          <li><strong>Causes:</strong> Defective blades, sharp edges, broken glass</li>
          <li><strong>Treatment:</strong> Cleaning, suturing, tetanus vaccination</li>
          <li><strong>Complications:</strong> Infection, nerve damage, scarring</li>
        </ul>
        
        <h4>Crush Injuries:</h4>
        <ul>
          <li><strong>Causes:</strong> Malfunctioning machinery, collapsing furniture</li>
          <li><strong>Treatment:</strong> Fracture repair, soft tissue reconstruction</li>
          <li><strong>Complications:</strong> Compartment syndrome, permanent disability</li>
        </ul>
        
        <h4>Eye Injuries:</h4>
        <ul>
          <li><strong>Foreign Objects:</strong> Immediate ophthalmologic evaluation</li>
          <li><strong>Chemical Exposure:</strong> Immediate irrigation, emergency care</li>
          <li><strong>Impact Injuries:</strong> May cause retinal detachment, vision loss</li>
        </ul>
      `
    },
    {
      id: 'medical-documentation',
      title: 'Medical Documentation for Legal Cases',
      icon: FileText,
      summary: 'How to properly document medical treatment for product liability claims.',
      content: `
        <h3>Essential Medical Records</h3>
        
        <h4>Emergency Department Records:</h4>
        <ul>
          <li>Triage notes documenting initial assessment</li>
          <li>Physician examination findings</li>
          <li>Diagnostic test results (X-rays, CT scans, lab work)</li>
          <li>Treatment provided and medications given</li>
          <li>Discharge instructions and follow-up plans</li>
        </ul>
        
        <h4>Hospital Records (if admitted):</h4>
        <ul>
          <li>Admission history and physical examination</li>
          <li>Daily progress notes from physicians</li>
          <li>Nursing notes and vital sign monitoring</li>
          <li>Surgical reports and anesthesia records</li>
          <li>Consultation reports from specialists</li>
          <li>Discharge summary and final diagnosis</li>
        </ul>
        
        <h4>Specialist Consultations:</h4>
        <ul>
          <li>Orthopedic evaluations for fractures and injuries</li>
          <li>Plastic surgery consultations for burns and lacerations</li>
          <li>Ophthalmology reports for eye injuries</li>
          <li>Toxicology evaluations for chemical exposures</li>
          <li>Neurology assessments for brain injuries</li>
        </ul>

        <h3>Ongoing Documentation Requirements</h3>
        
        <h4>Follow-up Care Records:</h4>
        <ul>
          <li>Primary care physician follow-up visits</li>
          <li>Specialist follow-up appointments</li>
          <li>Physical therapy progress notes</li>
          <li>Occupational therapy evaluations</li>
          <li>Mental health treatment records</li>
        </ul>
        
        <h4>Diagnostic Testing:</h4>
        <ul>
          <li>Imaging studies (X-rays, MRI, CT scans)</li>
          <li>Laboratory tests and blood work</li>
          <li>Pulmonary function tests for respiratory injuries</li>
          <li>Neuropsychological testing for brain injuries</li>
          <li>Cardiac evaluations for electrical injuries</li>
        </ul>

        <h3>Photography and Visual Documentation</h3>
        
        <h4>Injury Photography Guidelines:</h4>
        <ul>
          <li>Take photos as soon as safely possible</li>
          <li>Include close-up and wide-angle shots</li>
          <li>Use good lighting and clear focus</li>
          <li>Include a reference object for scale</li>
          <li>Take photos throughout the healing process</li>
          <li>Date and time stamp all photos</li>
        </ul>
        
        <h4>Product Documentation:</h4>
        <ul>
          <li>Photograph the defective product from all angles</li>
          <li>Document any warning labels or instructions</li>
          <li>Show the defect or malfunction clearly</li>
          <li>Include serial numbers and model information</li>
          <li>Photograph the scene where injury occurred</li>
        </ul>

        <h3>Expert Medical Evaluations</h3>
        
        <h4>Independent Medical Examinations (IME):</h4>
        <ul>
          <li>Objective assessment by neutral physician</li>
          <li>Evaluation of current medical status</li>
          <li>Assessment of future medical needs</li>
          <li>Determination of disability and limitations</li>
          <li>Causation analysis linking injury to product</li>
        </ul>
        
        <h4>Life Care Planning:</h4>
        <ul>
          <li>Comprehensive assessment of future medical needs</li>
          <li>Cost projections for ongoing care</li>
          <li>Equipment and assistive device requirements</li>
          <li>Home and vehicle modification needs</li>
          <li>Attendant care and support services</li>
        </ul>

        <h3>Medical Cost Documentation</h3>
        
        <h4>Financial Records to Maintain:</h4>
        <ul>
          <li>Hospital bills and itemized statements</li>
          <li>Physician and specialist fees</li>
          <li>Prescription medication receipts</li>
          <li>Medical equipment and device costs</li>
          <li>Physical therapy and rehabilitation costs</li>
          <li>Travel expenses for medical treatment</li>
        </ul>
        
        <h4>Insurance Documentation:</h4>
        <ul>
          <li>Insurance claim forms and correspondence</li>
          <li>Explanation of Benefits (EOB) statements</li>
          <li>Documentation of denied claims</li>
          <li>Out-of-pocket expense tracking</li>
          <li>Co-payment and deductible records</li>
        </ul>
      `
    },
    {
      id: 'long-term-health',
      title: 'Long-term Health Considerations',
      icon: Activity,
      summary: 'Understanding potential long-term health effects and ongoing medical needs.',
      content: `
        <h3>Chronic Health Effects from Product Exposure</h3>
        
        <h4>Chemical Exposure Long-term Effects:</h4>
        <ul>
          <li><strong>Respiratory System:</strong> Asthma, chronic bronchitis, lung fibrosis</li>
          <li><strong>Skin:</strong> Chronic dermatitis, sensitization, permanent scarring</li>
          <li><strong>Neurological:</strong> Memory problems, cognitive impairment, neuropathy</li>
          <li><strong>Cancer Risk:</strong> Some chemicals are known carcinogens</li>
          <li><strong>Reproductive:</strong> Fertility issues, birth defects risk</li>
        </ul>
        
        <h4>Burn Injury Complications:</h4>
        <ul>
          <li><strong>Contractures:</strong> Scar tissue limiting joint movement</li>
          <li><strong>Hypertrophic Scarring:</strong> Raised, thickened scars</li>
          <li><strong>Keloids:</strong> Overgrown scar tissue</li>
          <li><strong>Chronic Pain:</strong> Persistent pain at burn sites</li>
          <li><strong>Temperature Sensitivity:</strong> Inability to regulate temperature</li>
        </ul>
        
        <h4>Traumatic Injury Sequelae:</h4>
        <ul>
          <li><strong>Chronic Pain Syndromes:</strong> Persistent pain despite healing</li>
          <li><strong>Arthritis:</strong> Joint damage leading to early arthritis</li>
          <li><strong>Nerve Damage:</strong> Permanent numbness or weakness</li>
          <li><strong>PTSD:</strong> Psychological trauma from the incident</li>
        </ul>

        <h3>Ongoing Medical Monitoring</h3>
        
        <h4>Regular Health Surveillance:</h4>
        <ul>
          <li>Periodic medical examinations to assess health status</li>
          <li>Laboratory testing to monitor organ function</li>
          <li>Imaging studies to track disease progression</li>
          <li>Specialist consultations as recommended</li>
          <li>Cancer screening if exposure to carcinogens</li>
        </ul>
        
        <h4>Early Detection Programs:</h4>
        <ul>
          <li>Baseline testing soon after exposure</li>
          <li>Regular follow-up testing per medical protocols</li>
          <li>Biomarker monitoring for early disease detection</li>
          <li>Genetic testing if indicated</li>
        </ul>

        <h3>Rehabilitation and Recovery</h3>
        
        <h4>Physical Rehabilitation:</h4>
        <ul>
          <li><strong>Physical Therapy:</strong> Restore strength, mobility, and function</li>
          <li><strong>Occupational Therapy:</strong> Adapt daily living activities</li>
          <li><strong>Vocational Rehabilitation:</strong> Return to work or new career training</li>
          <li><strong>Pain Management:</strong> Comprehensive approach to chronic pain</li>
        </ul>
        
        <h4>Psychological Support:</h4>
        <ul>
          <li><strong>Counseling:</strong> Individual therapy for trauma and adjustment</li>
          <li><strong>Support Groups:</strong> Connect with others facing similar challenges</li>
          <li><strong>Family Therapy:</strong> Help family members cope and adjust</li>
          <li><strong>Psychiatric Care:</strong> Medication for depression, anxiety, PTSD</li>
        </ul>

        <h3>Adaptive Equipment and Modifications</h3>
        
        <h4>Assistive Devices:</h4>
        <ul>
          <li>Mobility aids (wheelchairs, walkers, canes)</li>
          <li>Prosthetic devices for amputations</li>
          <li>Communication devices for speech impairments</li>
          <li>Vision aids for eye injuries</li>
          <li>Hearing aids for hearing loss</li>
        </ul>
        
        <h4>Home Modifications:</h4>
        <ul>
          <li>Wheelchair accessibility (ramps, wider doorways)</li>
          <li>Bathroom modifications (grab bars, accessible shower)</li>
          <li>Kitchen adaptations for limited mobility</li>
          <li>Bedroom modifications (hospital bed, lift equipment)</li>
          <li>Safety features (alert systems, non-slip surfaces)</li>
        </ul>

        <h3>Life Care Planning</h3>
        
        <h4>Future Medical Needs Assessment:</h4>
        <ul>
          <li>Ongoing physician care and specialist consultations</li>
          <li>Medications and medical supplies</li>
          <li>Rehabilitation services and therapy</li>
          <li>Diagnostic testing and monitoring</li>
          <li>Surgical interventions and revisions</li>
        </ul>
        
        <h4>Cost Projections:</h4>
        <ul>
          <li>Lifetime medical expense calculations</li>
          <li>Equipment replacement and upgrade costs</li>
          <li>Home modification and maintenance</li>
          <li>Attendant care and support services</li>
          <li>Lost earning capacity evaluation</li>
        </ul>

        <h3>Prevention of Secondary Complications</h3>
        
        <h4>Infection Prevention:</h4>
        <ul>
          <li>Proper wound care and hygiene</li>
          <li>Vaccination updates (tetanus, pneumonia)</li>
          <li>Early treatment of respiratory infections</li>
          <li>Skin care for burn survivors</li>
        </ul>
        
        <h4>Injury Prevention:</h4>
        <ul>
          <li>Fall prevention strategies</li>
          <li>Environmental safety modifications</li>
          <li>Medication management to prevent interactions</li>
          <li>Regular health maintenance</li>
        </ul>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Product Liability Medical Guidance | California | Health Information & Resources"
        description="Comprehensive medical guidance for product liability injuries. Understanding treatment, documentation, and long-term health considerations. Expert legal and medical support."
        canonical="/product-liability-medical-guidance"
      />

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium">
              Medical Guidance
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Product Liability Medical Guidance
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Comprehensive medical information and guidance for product liability injuries. Understanding your health needs and supporting your legal case.
            </p>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span className="text-lg">Expert Medical Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5" />
                <span className="text-lg">Health Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-lg">Legal Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              
              {/* Introduction */}
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-red-600" />
                    Product Liability Medical Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Product-related injuries can have serious immediate and long-term health consequences. This comprehensive medical guidance helps you understand your injuries, treatment options, and the importance of proper medical documentation for your legal case.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Important Medical Reminders</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Always seek immediate medical attention for any product-related injury</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Keep detailed records of all medical treatment and expenses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Package className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Preserve the defective product and all related materials</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Topics */}
              <div className="space-y-6">
                {medicalTopics.map((topic) => (
                  <Card key={topic.id} className="shadow-lg">
                    <Collapsible 
                      open={expandedSections[topic.id]}
                      onOpenChange={() => toggleSection(topic.id)}
                    >
                      <CollapsibleTrigger asChild>
                        <CardHeader className="hover:bg-gray-50 cursor-pointer transition-colors">
                          <CardTitle className="text-xl font-bold text-gray-900 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <topic.icon className="w-6 h-6 text-red-600" />
                              {topic.title}
                            </div>
                            {expandedSections[topic.id] ? 
                              <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            }
                          </CardTitle>
                          <p className="text-lg text-gray-600 mt-2">{topic.summary}</p>
                        </CardHeader>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent>
                        <CardContent>
                          <div 
                            className="text-lg text-gray-700 leading-relaxed prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: topic.content }}
                          />
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact Info */}
              <Card className="shadow-xl mt-8 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-red-900 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    Emergency Medical Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2 text-lg">Emergency Services</h4>
                      <ul className="space-y-1 text-red-800">
                        <li className="text-lg">• Emergency: 911</li>
                        <li className="text-lg">• Poison Control: 1-800-222-1222</li>
                        <li className="text-lg">• Non-Emergency Health Info: 811</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2 text-lg">Legal Support</h4>
                      <ul className="space-y-1 text-red-800">
                        <li className="text-lg">• Law Firm: (818) 123-4567</li>
                        <li className="text-lg">• 24/7 Emergency Legal Line</li>
                        <li className="text-lg">• Free Medical Documentation Review</li>
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
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-red-600" />
                      Need Medical Guidance?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-lg text-gray-700 mb-4">Speak with our medical liaison team</p>
                      <Button 
                        size="lg" 
                        className="w-full bg-red-600 hover:bg-red-700 text-lg"
                        onClick={() => window.open('tel:8181234567')}
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call (818) 123-4567
                      </Button>
                      
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-lg"
                      onClick={() => navigate('/product-liability-case-evaluation')}
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Start Product Liability Evaluation
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-lg"
                      onClick={() => navigate('/product-liability-compensation-calculator')}
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Calculate Compensation
                    </Button>
                  </CardContent>
                </Card>

                {/* Medical Documentation Checklist */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Medical Documentation Checklist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>✓ Emergency room records</li>
                      <li>✓ Hospital admission records</li>
                      <li>✓ Physician examination notes</li>
                      <li>✓ Diagnostic test results</li>
                      <li>✓ Treatment and medication records</li>
                      <li>✓ Follow-up appointment notes</li>
                      <li>✓ Physical therapy records</li>
                      <li>✓ All medical expenses</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Product Safety Resources */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Safety Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>• Product recall information</li>
                      <li>• Safety alert notifications</li>
                      <li>• Consumer protection guides</li>
                      <li>• Manufacturer contact info</li>
                      <li>• Regulatory agency reports</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLiabilityMedicalGuidance;