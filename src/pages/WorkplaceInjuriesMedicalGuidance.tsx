import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Stethoscope, 
  Phone, 
  Mail, 
  HardHat,
  AlertTriangle,
  CheckCircle,
  FileText,
  Heart,
  Shield,
  Clock,
  Users,
  Zap,
  Calendar
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/workplace-medical-hero.jpg';
import SEO from '@/components/SEO';


const WorkplaceInjuriesMedicalGuidance: React.FC = () => {
  return (
    <>
      <SEO 
        title="Workplace Injury Medical Guidance | California Treatment Guide"
        description="Essential medical guidance for California workplace injuries. Learn about treatment options, medical care rights, and documentation for your case."
        canonical="/workplace-injuries-medical-guidance"
      />

      

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})` }}
      >
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge className="bg-red-600/90 hover:bg-red-700 text-white px-4 py-2">
              <Stethoscope className="w-4 h-4 mr-2" />
              Medical Guidance
            </Badge>
            <Badge className="bg-red-600/90 hover:bg-red-700 text-white px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Your Health First
            </Badge>
            <Badge className="bg-red-600/90 hover:bg-red-700 text-white px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Know Your Rights
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Workplace Injury <span className="text-red-400">Medical Guidance</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Essential medical guidance for California workplace injuries. Protect your health and legal rights with proper medical care and documentation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">

            {/* Immediate Medical Care */}
            <Card className="shadow-lg">
              <CardHeader className="bg-red-50 border-b border-red-200">
                <CardTitle className="text-2xl text-red-600 flex items-center">
                  <Zap className="w-6 h-6 mr-3" />
                  Immediate Medical Care After Workplace Injury
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
                    <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Emergency Situations - Call 911 Immediately
                    </h3>
                    <ul className="text-red-700 space-y-1">
                      <li>• Severe bleeding or trauma</li>
                      <li>• Loss of consciousness</li>
                      <li>• Difficulty breathing</li>
                      <li>• Suspected spinal injury</li>
                      <li>• Chemical exposure or burns</li>
                      <li>• Chest pain or heart symptoms</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-green-50 border-green-200">
                      <CardHeader>
                        <CardTitle className="text-green-800 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          DO: First Steps
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-green-700 space-y-2 text-sm">
                          <li>• Seek immediate medical attention</li>
                          <li>• Report injury to supervisor immediately</li>
                          <li>• Document everything with photos</li>
                          <li>• Get witness contact information</li>
                          <li>• Keep all medical records</li>
                          <li>• Follow all medical advice</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-50 border-red-200">
                      <CardHeader>
                        <CardTitle className="text-red-800 flex items-center">
                          <AlertTriangle className="w-5 h-5 mr-2" />
                          DON'T: Common Mistakes
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-red-700 space-y-2 text-sm">
                          <li>• Don't delay seeking medical care</li>
                          <li>• Don't admit fault</li>
                          <li>• Don't minimize your injuries</li>
                          <li>• Don't skip medical appointments</li>
                          <li>• Don't ignore pain or symptoms</li>
                          <li>• Don't sign anything without review</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Provider Rights */}
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-50 border-b border-blue-200">
                <CardTitle className="text-2xl text-blue-600 flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  Your Medical Provider Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
                    <h3 className="font-semibold text-blue-800 mb-2">Workers' Compensation Medical Care</h3>
                    <p className="text-blue-700">
                      Workers' comp limits your choice of doctors to their approved network, but you have important rights and options.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Emergency Care Rights</h4>
                      <p className="text-gray-700 mb-2">
                        In emergencies, you can go to any emergency room. Workers' comp must cover emergency treatment regardless of the provider.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Pre-Designation Rights</h4>
                      <p className="text-gray-700 mb-2">
                        If you notify your employer in writing before injury, you can choose your own doctor for initial treatment.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Second Opinion Rights</h4>
                      <p className="text-gray-700 mb-2">
                        After 30 days with the company doctor, you can request a one-time change to another doctor within their network.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Third-Party Claims Advantage</h4>
                      <p className="text-gray-700 mb-2">
                        If you have a third-party claim, you can choose any doctor you want for your treatment and care.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documentation and Records */}
            <Card className="shadow-lg">
              <CardHeader className="bg-purple-50 border-b border-purple-200">
                <CardTitle className="text-2xl text-purple-600 flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Medical Documentation & Records
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Proper medical documentation is crucial for both your health and your legal case. Here's what you need to know:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-600 mb-3">Keep Detailed Records Of:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• All medical appointments and treatments</li>
                        <li>• Medications prescribed and taken</li>
                        <li>• Daily pain levels and limitations</li>
                        <li>• Work restrictions and accommodations</li>
                        <li>• Physical therapy sessions</li>
                        <li>• Specialist referrals and consultations</li>
                        <li>• Medical bills and insurance claims</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-600 mb-3">Document Your Symptoms:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Pain levels (1-10 scale daily)</li>
                        <li>• Sleep disturbances</li>
                        <li>• Mobility limitations</li>
                        <li>• Emotional impact</li>
                        <li>• Activities you can no longer do</li>
                        <li>• Work limitations</li>
                        <li>• Family impact</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded">
                    <h4 className="font-semibold text-purple-800 mb-2">Medical Records Tips:</h4>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Request copies of all medical records</li>
                      <li>• Keep a personal medical journal</li>
                      <li>• Take photos of visible injuries</li>
                      <li>• Save all receipts for medical expenses</li>
                      <li>• Document travel to medical appointments</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Treatment Guidelines */}
            <Card className="shadow-lg">
              <CardHeader className="bg-green-50 border-b border-green-200">
                <CardTitle className="text-2xl text-green-600 flex items-center">
                  <Heart className="w-6 h-6 mr-3" />
                  Treatment Guidelines by Injury Type
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-green-600">Construction Injuries</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Immediate trauma assessment</li>
                        <li>• X-rays and CT scans for fractures</li>
                        <li>• Orthopedic specialist consultation</li>
                        <li>• Physical therapy evaluation</li>
                        <li>• Pain management if needed</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-green-600">Chemical Exposure</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Immediate decontamination</li>
                        <li>• Pulmonary function testing</li>
                        <li>• Blood and urine testing</li>
                        <li>• Occupational medicine specialist</li>
                        <li>• Long-term monitoring plan</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-green-600">Back Injuries</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• MRI or CT scan imaging</li>
                        <li>• Neurological evaluation</li>
                        <li>• Physical therapy program</li>
                        <li>• Pain management consultation</li>
                        <li>• Work capacity evaluation</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-green-600">Head Injuries</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• CT scan and MRI</li>
                        <li>• Neurological examination</li>
                        <li>• Cognitive testing</li>
                        <li>• Neuropsychological evaluation</li>
                        <li>• Ongoing monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Insurance and Billing */}
            <Card className="shadow-lg">
              <CardHeader className="bg-orange-50 border-b border-orange-200">
                <CardTitle className="text-2xl text-orange-600 flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Insurance and Medical Billing
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded">
                    <h3 className="font-semibold text-orange-800 mb-2">Important: Don't Pay Out of Pocket</h3>
                    <p className="text-orange-700">
                      Workers' compensation should cover all related medical expenses. Don't use your personal health insurance for workplace injuries.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-2">If Bills Are Sent to You:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Don't ignore medical bills</li>
                        <li>• Forward them to workers' comp insurer</li>
                        <li>• Keep copies of all correspondence</li>
                        <li>• Contact your attorney if bills aren't paid</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-orange-600 mb-2">Third-Party Claims Advantage:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Choice of any medical provider</li>
                        <li>• No network restrictions</li>
                        <li>• Access to best specialists</li>
                        <li>• Private room coverage</li>
                        <li>• Enhanced treatment options</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Warning Signs */}
            <Card className="shadow-lg">
              <CardHeader className="bg-red-50 border-b border-red-200">
                <CardTitle className="text-2xl text-red-600 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Warning Signs - Seek Immediate Care
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
                  <h3 className="font-semibold text-red-800 mb-3">Call 911 or Go to ER if You Experience:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="text-red-700 space-y-1">
                      <li>• Severe or worsening pain</li>
                      <li>• Numbness or tingling</li>
                      <li>• Loss of feeling or movement</li>
                      <li>• Difficulty breathing</li>
                      <li>• Chest pain</li>
                      <li>• Severe headaches</li>
                    </ul>
                    <ul className="text-red-700 space-y-1">
                      <li>• Vision changes</li>
                      <li>• Confusion or memory loss</li>
                      <li>• Signs of infection</li>
                      <li>• Uncontrolled bleeding</li>
                      <li>• Fever with injury</li>
                      <li>• Any concerning symptoms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Emergency Contact */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-600 text-center">Medical Emergency?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link to="tel:911">
                      <Zap className="w-4 h-4 mr-2" />
                      Call 911
                    </Link>
                  </Button>
                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link to="tel:8181234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Attorney (818) 123-4567
                    </Link>
                  </Button>
                  <p className="text-sm text-red-700">
                    Available 24/7 for workplace injury emergencies
                  </p>
                </CardContent>
              </Card>

              {/* Quick Medical Checklist */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Medical Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Seek immediate medical attention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Report injury to employer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Document all treatment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Keep all medical records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Follow all medical advice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Contact legal help</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Important Phone Numbers */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Important Contacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="p-3 bg-red-50 rounded">
                    <p className="font-semibold text-red-800">Emergency: 911</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="font-semibold text-blue-800">Poison Control: (800) 222-1222</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <p className="font-semibold text-green-800">Attorney: (818) 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Additional Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/workplace-injuries-case-evaluation">
                      <FileText className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/practice-areas/workplace-injuries">
                      <HardHat className="w-4 h-4 mr-2" />
                      Workplace Injury Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkplaceInjuriesMedicalGuidance;