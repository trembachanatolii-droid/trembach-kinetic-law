import React from 'react';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, AlertTriangle, FileText } from 'lucide-react';
import heroImage from '@/assets/construction-medical-guidance-hero.jpg';

const ConstructionMedicalGuidance: React.FC = () => {
  return (
    <ComprehensivePracticeAreaTemplate
      seo={{
        title: "Construction Accident Medical Guidance | California Injury Care",
        description: "Medical guidance for construction accident injuries. Immediate care steps, injury documentation, and treatment options for maximum recovery and legal protection.",
        canonical: "https://trembachlawfirm.com/construction-medical-guidance"
      }}
      hero={{
        backgroundImage: heroImage,
        title: "Construction Accident Medical Guidance",
        subtitle: "Essential Medical Information for Construction Injury Recovery",
        description: "Comprehensive medical guidance for construction accident victims covering immediate care, injury documentation, treatment options, and long-term recovery planning to protect both your health and legal rights."
      }}
    >
      <div className="space-y-8">
        <Card className="content-card p-8">
          <AlertTriangle className="w-12 h-12 text-primary mb-6" />
          <h2 className="text-3xl font-bold mb-6">Immediate Medical Response for Construction Accidents</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Emergency Priorities</h3>
              <div className="space-y-4">
                <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Life-Threatening Injuries</h4>
                  <p className="text-sm">Call 911 immediately for severe bleeding, unconsciousness, suspected spinal injuries, or difficulty breathing.</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Don't Move if Injured</h4>
                  <p className="text-sm">Spinal injuries from falls may not be immediately apparent. Wait for medical professionals.</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Document Visible Injuries</h4>
                  <p className="text-sm">Photograph injuries immediately if able, as appearance changes rapidly with treatment.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Common Construction Injuries</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-primary mr-2" />
                  Traumatic brain injuries from falls
                </li>
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-primary mr-2" />
                  Spinal cord injuries and paralysis
                </li>
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-primary mr-2" />
                  Broken bones and fractures
                </li>
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-primary mr-2" />
                  Burns from electrical accidents
                </li>
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-primary mr-2" />
                  Crush injuries from equipment
                </li>
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-primary mr-2" />
                  Amputations and severe lacerations
                </li>
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-primary mr-2" />
                  Internal organ damage
                </li>
                <li className="flex items-center">
                  <Heart className="w-5 h-5 text-primary mr-2" />
                  Respiratory injuries from dust/chemicals
                </li>
              </ul>
            </div>
          </div>
        </Card>
        
        <Card className="content-card p-8">
          <FileText className="w-12 h-12 text-primary mb-6" />
          <h2 className="text-3xl font-bold mb-6">Medical Documentation for Legal Protection</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-primary/5 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Hospital Records</h3>
              <p className="text-sm text-muted-foreground mb-4">Obtain copies of all emergency room records, admission notes, surgical reports, and discharge summaries.</p>
            </div>
            <div className="p-6 bg-primary/5 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Doctor Reports</h3>
              <p className="text-sm text-muted-foreground mb-4">Keep detailed records from treating physicians, specialists, and physical therapists documenting injury progression.</p>
            </div>
            <div className="p-6 bg-primary/5 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Imaging Studies</h3>
              <p className="text-sm text-muted-foreground mb-4">Request copies of X-rays, CT scans, MRIs, and other diagnostic images showing injury extent.</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Treatment Timeline</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Emergency Treatment (First 24-48 hours)</h4>
                  <p className="text-sm text-muted-foreground">Stabilization, diagnostic imaging, and initial surgical intervention if needed.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Acute Care (Days to Weeks)</h4>
                  <p className="text-sm text-muted-foreground">Pain management, additional surgeries, and beginning of rehabilitation process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Rehabilitation (Weeks to Months)</h4>
                  <p className="text-sm text-muted-foreground">Physical therapy, occupational therapy, and gradual return to activities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold">Long-term Care (Months to Years)</h4>
                  <p className="text-sm text-muted-foreground">Ongoing treatment, adaptive equipment, and potential career retraining.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Get Medical Documentation Help
          </Button>
        </div>
      </div>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default ConstructionMedicalGuidance;