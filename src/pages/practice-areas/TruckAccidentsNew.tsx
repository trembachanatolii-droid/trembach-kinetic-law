import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import heroImage from '@/assets/practice-areas/truck-accidents-hero.jpg';

const TruckAccidentsNew = () => {
  return (
    <ComprehensivePracticeAreaTemplate
      seo={{
        title: "California Truck Accident Lawyers | 18-Wheeler Catastrophic Injury Experts",
        description: "Expert truck accident attorneys fighting trucking companies throughout California. Former defense counsel now pursuing maximum compensation for big rig victims.",
        canonical: "/practice-areas/truck-18-wheeler-accidents"
      }}
      hero={{
        backgroundImage: heroImage,
        title: "California Truck Accident Lawyers",
        subtitle: "Catastrophic Injury Experts Fighting Trucking Companies",
        description: "Former Defense Attorney Now Pursuing Maximum Compensation for Big Rig Victims Statewide"
      }}
    >
      {/* Comprehensive Overview */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California's Commercial Trucking Crisis</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Every year, over 5,000 people die and 150,000 suffer injuries in commercial truck accidents across America, with California's massive transportation infrastructure bearing a disproportionate share of these devastating collisions. When an 80,000-pound eighteen-wheeler collides with a passenger vehicle, the results are catastrophic—traumatic brain injuries, spinal cord damage, multiple fractures, and too often, death. At Trembach Law Firm, we leverage our former defense attorney insight to combat the immediate response teams, aggressive defense tactics, and unlimited resources trucking companies deploy to minimize their liability.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          California's position as America's primary Pacific trade gateway means millions of commercial trucks traverse our highways annually. The Ports of Los Angeles and Long Beach alone generate over 20,000 truck trips daily. Interstate 5 carries constant streams of big rigs from Mexico to Canada. Highway 99 serves as the Central Valley's commercial lifeline. Interstate 10 connects California to the rest of America.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          This massive commercial traffic, combined with passenger vehicles, creates deadly conditions where size and weight disparities turn minor errors into fatal catastrophes. The trucking industry operates under extensive federal and state regulations designed to ensure safety, yet violations remain common as companies prioritize delivery deadlines and profits over compliance.
        </p>
      </Card>

      {/* Federal Regulations */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Federal Trucking Regulations</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Federal Motor Carrier Safety Administration (FMCSA) regulations create comprehensive safety requirements that trucking companies routinely violate in pursuit of profits. Our experience defending trucking companies reveals exactly how these violations occur and how to prove them in court.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Hours of Service Rules</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• 11-hour daily driving limit</li>
              <li>• 14-hour work window</li>
              <li>• 10 consecutive hours off duty</li>
              <li>• 30-minute break requirements</li>
              <li>• Weekly hour limitations</li>
              <li>• Electronic logging device compliance</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Vehicle Safety Standards</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Pre-trip inspection requirements</li>
              <li>• Brake system maintenance</li>
              <li>• Tire condition standards</li>
              <li>• Lighting and visibility</li>
              <li>• Load securement rules</li>
              <li>• Weight distribution limits</li>
            </ul>
          </Card>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Despite these regulations, companies find ways to pressure drivers into violations. Electronic logging devices replaced paper logs to prevent falsification, yet drivers and companies manipulate even electronic records. Each violation represents potential liability when accidents occur.
        </p>
      </Card>

      {/* Rapid Response Teams */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Trucking Company Defense Tactics</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          When truck accidents occur, trucking companies deploy rapid response teams including investigators, adjusters, and attorneys to accident scenes before victims receive medical treatment. These teams work to minimize liability through evidence manipulation, witness influence, and strategic documentation.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Immediate Response</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Scene investigation teams</li>
              <li>• Evidence collection/removal</li>
              <li>• Witness interviews</li>
              <li>• Photograph manipulation</li>
              <li>• Driver coaching</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Legal Strategies</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Blame other drivers</li>
              <li>• Question medical treatment</li>
              <li>• Minimize injury severity</li>
              <li>• Challenge causation</li>
              <li>• Delay proceedings</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Our Countermeasures</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Independent investigation</li>
              <li>• Evidence preservation</li>
              <li>• Expert reconstruction</li>
              <li>• Document spoliation claims</li>
              <li>• Aggressive discovery</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Catastrophic Injuries */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Catastrophic Truck Accident Injuries</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          The size and weight disparity between commercial trucks and passenger vehicles creates devastating injury patterns requiring specialized medical and legal expertise. We work with top medical professionals to fully document all current and future needs.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Common Severe Injuries</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Traumatic brain injuries</li>
              <li>• Spinal cord damage and paralysis</li>
              <li>• Multiple bone fractures</li>
              <li>• Crushing injuries</li>
              <li>• Internal organ damage</li>
              <li>• Severe burns from fires</li>
              <li>• Amputations</li>
              <li>• Post-traumatic stress disorder</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Long-Term Consequences</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Permanent disability requirements</li>
              <li>• Ongoing medical treatment needs</li>
              <li>• Rehabilitation and therapy costs</li>
              <li>• Home and vehicle modifications</li>
              <li>• Lost earning capacity</li>
              <li>• Family caregiver impact</li>
              <li>• Reduced life expectancy</li>
              <li>• Quality of life diminishment</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Compensation */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Maximum Compensation Recovery</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Truck accident cases involve substantial damages reflecting the severity of injuries and lifelong impact. Our comprehensive approach ensures no element of damage goes uncompensated.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Economic Damages</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Medical expenses (past and future)</li>
              <li>• Lost wages and benefits</li>
              <li>• Diminished earning capacity</li>
              <li>• Property damage</li>
              <li>• Home modifications</li>
              <li>• Assistive equipment</li>
              <li>• Transportation costs</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Non-Economic Damages</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Pain and suffering</li>
              <li>• Emotional distress</li>
              <li>• Loss of enjoyment of life</li>
              <li>• Disfigurement and scarring</li>
              <li>• Loss of consortium</li>
              <li>• Mental anguish</li>
              <li>• Punitive damages (when applicable)</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="content-card p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Injured in a Truck Accident?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          Time is critical in preserving evidence and protecting your rights against well-funded trucking companies. Our experienced truck accident attorneys provide immediate consultation and aggressive representation to secure maximum compensation for your catastrophic injuries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Immediate Truck Accident Consultation
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Call (555) 123-4567
          </Button>
        </div>
      </Card>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default TruckAccidentsNew;