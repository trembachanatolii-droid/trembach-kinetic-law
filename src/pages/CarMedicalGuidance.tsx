import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Stethoscope, Heart, AlertTriangle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/medical-guidance-hero.jpg';
import medicalImage from '@/assets/practice-areas/car-accident-medical.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

const CarMedicalGuidance = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Car Accident Medical Guidance | Treatment & Recovery Information"
        description="Essential medical guidance for car accident victims in California. Learn about common injuries, treatment options, and protecting your legal rights."
        canonical="/car-medical-guidance"
      />

      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Car Accident Medical Guidance
          </h1>
          <p className="text-xl mb-6">
            Essential information for injury treatment and recovery after a California car accident
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Immediate Medical Actions */}
          <Card className="p-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold">Immediate Medical Actions After Your Accident</h2>
            </div>
            
            <img 
              src={medicalImage} 
              alt="Car accident medical treatment and documentation" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Even if you feel fine immediately after your car accident, seeking medical attention is crucial. 
                Adrenaline and shock can mask serious injuries, and some conditions may not manifest symptoms 
                for hours or even days after the collision.
              </p>

              <h3>Why Immediate Medical Care Is Critical</h3>
              <ul>
                <li><strong>Hidden Injuries:</strong> Traumatic brain injuries, internal bleeding, and spinal damage often have delayed symptoms</li>
                <li><strong>Whiplash:</strong> Symptoms typically appear 24-72 hours after the accident</li>
                <li><strong>Legal Protection:</strong> Medical records immediately after the accident create crucial documentation linking injuries to the collision</li>
                <li><strong>Insurance Claims:</strong> Delays in treatment give insurance companies ammunition to argue you weren't really injured</li>
                <li><strong>Prevention:</strong> Early treatment can prevent minor injuries from becoming major complications</li>
              </ul>

              <h3>Steps to Take Immediately</h3>
              <ol>
                <li><strong>Call 911 if anyone is seriously injured</strong> - Don't attempt to move severely injured people</li>
                <li><strong>Go to the emergency room</strong> if you have any pain, dizziness, confusion, or visible injuries</li>
                <li><strong>See your doctor within 24 hours</strong> even for "minor" accidents</li>
                <li><strong>Be honest about all symptoms</strong> - don't downplay pain or discomfort</li>
                <li><strong>Follow all medical advice</strong> - complete prescribed treatments and attend follow-up appointments</li>
              </ol>
            </div>
          </Card>

          {/* Common Car Accident Injuries */}
          <Card className="p-8">
            <div className="flex items-center mb-6">
              <Stethoscope className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Common Car Accident Injuries</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Neck and Back Injuries</h3>
                <ul className="space-y-2">
                  <li><strong>Whiplash:</strong> Most common in rear-end collisions</li>
                  <li><strong>Herniated Discs:</strong> Can cause chronic pain and nerve damage</li>
                  <li><strong>Spinal Cord Injuries:</strong> May result in partial or complete paralysis</li>
                  <li><strong>Muscle Strains:</strong> Can lead to long-term pain and stiffness</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Head and Brain Injuries</h3>
                <ul className="space-y-2">
                  <li><strong>Concussions:</strong> Mild traumatic brain injuries with serious consequences</li>
                  <li><strong>Traumatic Brain Injury (TBI):</strong> Can cause permanent cognitive impairment</li>
                  <li><strong>Skull Fractures:</strong> May require surgery and extended recovery</li>
                  <li><strong>Facial Injuries:</strong> Including broken bones and lacerations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Broken Bones and Fractures</h3>
                <ul className="space-y-2">
                  <li><strong>Rib Fractures:</strong> Common from seatbelt restraint</li>
                  <li><strong>Arm and Leg Fractures:</strong> From impact or bracing for collision</li>
                  <li><strong>Pelvic Fractures:</strong> Serious injuries requiring extensive treatment</li>
                  <li><strong>Compound Fractures:</strong> May require multiple surgeries</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Internal Injuries</h3>
                <ul className="space-y-2">
                  <li><strong>Internal Bleeding:</strong> Life-threatening condition requiring immediate care</li>
                  <li><strong>Organ Damage:</strong> Liver, spleen, or kidney injuries</li>
                  <li><strong>Pneumothorax:</strong> Collapsed lung from chest trauma</li>
                  <li><strong>Abdominal Injuries:</strong> Can cause delayed symptoms</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">Warning Signs Requiring Immediate Medical Attention:</h4>
              <ul className="text-yellow-700 space-y-1">
                <li>• Loss of consciousness or confusion</li>
                <li>• Severe headache or dizziness</li>
                <li>• Difficulty breathing or chest pain</li>
                <li>• Severe pain or inability to move</li>
                <li>• Numbness or tingling in extremities</li>
                <li>• Nausea or vomiting</li>
                <li>• Signs of internal bleeding (abdominal pain, weakness)</li>
              </ul>
            </div>
          </Card>

          {/* Treatment and Recovery */}
          <Card className="p-8">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold">Treatment and Recovery Process</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h3>Phase 1: Emergency Treatment (First 24-48 Hours)</h3>
              <ul>
                <li><strong>Emergency Room Assessment:</strong> CT scans, X-rays, and neurological testing</li>
                <li><strong>Stabilization:</strong> Treatment for life-threatening injuries</li>
                <li><strong>Pain Management:</strong> Medications to control acute pain</li>
                <li><strong>Documentation:</strong> Detailed medical records of all injuries and treatments</li>
              </ul>

              <h3>Phase 2: Acute Care (First Few Weeks)</h3>
              <ul>
                <li><strong>Follow-up Appointments:</strong> Monitor injury progression and complications</li>
                <li><strong>Specialist Referrals:</strong> Orthopedic, neurological, or other specialists as needed</li>
                <li><strong>Physical Therapy:</strong> Begin rehabilitation to prevent stiffness and loss of function</li>
                <li><strong>Diagnostic Testing:</strong> MRIs, bone scans, or other detailed imaging</li>
              </ul>

              <h3>Phase 3: Rehabilitation (Weeks to Months)</h3>
              <ul>
                <li><strong>Physical Therapy:</strong> Restore strength, mobility, and function</li>
                <li><strong>Occupational Therapy:</strong> Relearn daily activities and work skills</li>
                <li><strong>Psychological Support:</strong> Address trauma, anxiety, and depression</li>
                <li><strong>Vocational Rehabilitation:</strong> Return to work or retrain for new employment</li>
              </ul>

              <h3>Phase 4: Long-term Management</h3>
              <ul>
                <li><strong>Chronic Pain Management:</strong> Ongoing treatment for persistent pain</li>
                <li><strong>Adaptive Equipment:</strong> Tools and devices to assist with daily activities</li>
                <li><strong>Regular Monitoring:</strong> Watch for delayed complications or worsening conditions</li>
                <li><strong>Lifestyle Modifications:</strong> Changes to accommodate permanent limitations</li>
              </ul>
            </div>
          </Card>

          {/* Protecting Your Rights */}
          <Card className="p-8 bg-red-50 border border-red-200">
            <h2 className="text-3xl font-bold mb-6 text-red-800">Protecting Your Legal Rights During Treatment</h2>
            
            <div className="prose prose-lg max-w-none text-red-700">
              <h3>Important Guidelines:</h3>
              <ul>
                <li><strong>Don't Delay Treatment:</strong> Insurance companies use treatment delays to argue injuries aren't serious</li>
                <li><strong>Follow Medical Advice:</strong> Attend all appointments and complete prescribed treatments</li>
                <li><strong>Document Everything:</strong> Keep records of all medical visits, treatments, and expenses</li>
                <li><strong>Be Honest About Pain:</strong> Don't downplay symptoms to appear tough</li>
                <li><strong>Avoid Giving Statements:</strong> Don't provide recorded statements to insurance companies without legal representation</li>
                <li><strong>Keep a Pain Journal:</strong> Document daily pain levels and how injuries affect your activities</li>
                <li><strong>Save All Bills:</strong> Medical expenses, prescriptions, and travel costs for treatment</li>
              </ul>

              <h3>What Insurance Companies Look For:</h3>
              <ul>
                <li>Gaps in treatment or missed appointments</li>
                <li>Inconsistent symptom reporting</li>
                <li>Social media posts showing physical activities</li>
                <li>Pre-existing conditions they can blame for your pain</li>
                <li>Any statements minimizing your injuries</li>
              </ul>
            </div>
          </Card>

          {/* Medical Specialists */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">Types of Medical Specialists You May Need</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Orthopedic Specialists</h3>
                <ul className="space-y-1">
                  <li>• Bone and joint injuries</li>
                  <li>• Fractures and breaks</li>
                  <li>• Spinal injuries</li>
                  <li>• Surgery and reconstruction</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Neurologists</h3>
                <ul className="space-y-1">
                  <li>• Brain and nerve injuries</li>
                  <li>• Concussions and TBI</li>
                  <li>• Spinal cord damage</li>
                  <li>• Cognitive impairment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Pain Management</h3>
                <ul className="space-y-1">
                  <li>• Chronic pain treatment</li>
                  <li>• Nerve blocks and injections</li>
                  <li>• Medication management</li>
                  <li>• Alternative therapies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Mental Health</h3>
                <ul className="space-y-1">
                  <li>• PTSD and anxiety treatment</li>
                  <li>• Depression counseling</li>
                  <li>• Cognitive behavioral therapy</li>
                  <li>• Trauma recovery</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="p-8 text-center bg-blue-50 border border-blue-200">
            <h2 className="text-3xl font-bold mb-4">Need Help with Your Car Accident Case?</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Don't navigate the complex medical and legal process alone. Our experienced team helps protect 
              your rights while you focus on recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link to="/car-case-evaluation">Get Free Case Evaluation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:8181234567">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (818) 123-4567
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CarMedicalGuidance;