import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MessageCircle, 
  Stethoscope,
  AlertTriangle,
  FileText,
  Clock,
  Heart,
  Brain,
  Shield,
  CheckCircle,
  XCircle
} from 'lucide-react';
import heroBackground from '@/assets/bicycle-medical-guidance-hero.jpg';

const BicycleMedicalGuidance = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Go Back Button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-20 left-4 z-[60] bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white/95"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Go Back
      </Button>

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-900/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-semibold">
            Bicycle Accident Medical Guidance
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Critical <span className="text-emerald-300">Medical Steps</span> After Your Bicycle Accident
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Proper medical care protects your health and strengthens your legal case. 
            Learn what to do immediately and how to document everything for maximum compensation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Emergency: (818) 123-4567
            </Button>
            <Button size="lg" variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-colors px-8 py-4 text-lg">
              <Stethoscope className="w-5 h-5 mr-2" />
              Medical Referrals
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Emergency Actions */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-red-600 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2" />
              IMMEDIATE ACTION REQUIRED
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-red-700">Call 911 If You Have:</h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-1 text-red-600" />Head injury or loss of consciousness</li>
                  <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-1 text-red-600" />Severe bleeding or visible bone breaks</li>
                  <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-1 text-red-600" />Neck or back pain</li>
                  <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-1 text-red-600" />Difficulty breathing or chest pain</li>
                  <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-1 text-red-600" />Inability to move limbs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-700">Even If You Feel "Fine":</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />Seek medical evaluation within 24 hours</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />Adrenaline can mask serious injuries</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />Document all injuries, no matter how minor</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />Internal injuries may not show symptoms immediately</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Bicycle Accident Injuries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          <Card className="p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-xl font-bold flex items-center">
                <Brain className="w-5 h-5 mr-2 text-red-600" />
                Head & Brain Injuries
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="mb-4 text-muted-foreground">
                Even with helmet use, cyclists frequently suffer traumatic brain injuries. These can have delayed symptoms that appear days or weeks later.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Warning Signs:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Headaches that worsen</li>
                  <li>• Confusion or memory problems</li>
                  <li>• Nausea or vomiting</li>
                  <li>• Sensitivity to light/sound</li>
                  <li>• Mood changes or irritability</li>
                  <li>• Sleep disturbances</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-xl font-bold flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-600" />
                Spinal & Internal Injuries
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="mb-4 text-muted-foreground">
                The force of vehicle impact can cause serious internal damage and spinal cord injuries that may not be immediately apparent.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Warning Signs:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Back or neck pain</li>
                  <li>• Numbness or tingling</li>
                  <li>• Abdominal pain</li>
                  <li>• Difficulty urinating</li>
                  <li>• Weakness in limbs</li>
                  <li>• Dizziness or lightheadedness</li>
                </ul>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Medical Documentation Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <FileText className="w-6 h-6 mr-2 text-red-600" />
              Critical Medical Documentation
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Proper documentation strengthens your case and ensures you receive full compensation for all injuries.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="space-y-4">
                <h3 className="font-semibold text-green-600">✓ DO THESE THINGS</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Get immediate medical attention</li>
                  <li>• Tell doctors ALL symptoms</li>
                  <li>• Follow all treatment recommendations</li>
                  <li>• Keep all medical records</li>
                  <li>• Take photos of visible injuries</li>
                  <li>• Document pain levels daily</li>
                  <li>• Attend all follow-up appointments</li>
                  <li>• Get second opinions when needed</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-red-600">✗ AVOID THESE MISTAKES</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Don't refuse ambulance transport</li>
                  <li>• Don't delay seeking treatment</li>
                  <li>• Don't minimize symptoms to doctors</li>
                  <li>• Don't skip appointments</li>
                  <li>• Don't ignore new symptoms</li>
                  <li>• Don't stop treatment early</li>
                  <li>• Don't pay medical bills yourself</li>
                  <li>• Don't sign medical releases for insurance</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-blue-600">📋 RECORDS TO KEEP</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Emergency room reports</li>
                  <li>• Diagnostic test results (X-rays, MRI, CT)</li>
                  <li>• Doctor's notes and treatment plans</li>
                  <li>• Physical therapy records</li>
                  <li>• Prescription medications</li>
                  <li>• Medical bills and receipts</li>
                  <li>• Photos of injuries (ongoing)</li>
                  <li>• Pain diary entries</li>
                </ul>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Treatment Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <Clock className="w-6 h-6 mr-2 text-red-600" />
              Bicycle Accident Medical Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-semibold text-red-600">Immediate (0-2 hours)</h3>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Call 911 for serious injuries</li>
                  <li>• Get emergency medical evaluation</li>
                  <li>• Document visible injuries with photos</li>
                  <li>• Report ALL symptoms, no matter how minor</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-orange-600">Within 24 Hours</h3>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Visit urgent care or ER if not already done</li>
                  <li>• Begin documenting pain and symptoms</li>
                  <li>• Schedule follow-up appointments</li>
                  <li>• Contact us for legal guidance</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-yellow-600">2-7 Days</h3>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Monitor for delayed symptoms (common with TBI)</li>
                  <li>• Begin recommended treatments</li>
                  <li>• Get diagnostic imaging if recommended</li>
                  <li>• Start physical therapy if prescribed</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-green-600">1-4 Weeks</h3>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Continue all recommended treatments</li>
                  <li>• Track recovery progress</li>
                  <li>• Report new or worsening symptoms immediately</li>
                  <li>• Consider specialist consultations</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-blue-600">Ongoing</h3>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Attend all medical appointments</li>
                  <li>• Follow treatment plans completely</li>
                  <li>• Document long-term effects</li>
                  <li>• Don't settle case until maximum recovery</li>
                </ul>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Insurance & Medical Bills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <Shield className="w-6 h-6 mr-2 text-red-600" />
              Handling Medical Bills & Insurance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <h3 className="font-semibold mb-3">Your Health Insurance</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />
                    Use your health insurance for immediate treatment
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />
                    They will seek reimbursement from settlement later
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />
                    We negotiate to reduce their lien claims
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />
                    Don't delay treatment due to cost concerns
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Dealing with Driver's Insurance</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 mt-1 text-red-600" />
                    Never sign medical releases without our review
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 mt-1 text-red-600" />
                    Don't let them pay bills directly to providers
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 mr-2 mt-1 text-red-600" />
                    Refuse independent medical exams initially
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />
                    Refer all insurance contact to us immediately
                  </li>
                </ul>
              </div>

            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Medical Liens & Treatment</h4>
              <p className="text-blue-700 text-sm">
                We can connect you with doctors who will treat you on a lien basis, meaning they wait for payment from your settlement. 
                This ensures you get necessary treatment regardless of your insurance or financial situation. Proper medical treatment 
                both aids your recovery and strengthens your legal case.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="text-center p-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Questions About Medical Care?</CardTitle>
            <p className="text-muted-foreground mt-2">
              Don't wait - proper medical documentation is crucial for your health and your case.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Mail className="w-5 h-5 mr-2" />
                Email Our Team
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Available 24/7 for medical emergencies and urgent legal questions.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default BicycleMedicalGuidance;