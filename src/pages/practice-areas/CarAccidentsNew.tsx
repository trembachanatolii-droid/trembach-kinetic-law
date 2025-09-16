import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import heroImage from '@/assets/practice-areas/car-accidents-hero.jpg';

const CarAccidentsNew = () => {
  return (
    <ComprehensivePracticeAreaTemplate
      seo={{
        title: "California Car Accident Lawyers | Maximum Compensation for Crash Victims",
        description: "Expert car accident attorneys throughout California. Former defense lawyer now fighting for injured drivers. Free consultation for vehicle collision cases.",
        canonical: "/practice-areas/car-accidents"
      }}
      hero={{
        backgroundImage: heroImage,
        title: "California Car Accident Lawyers",
        subtitle: "Maximum Compensation for Crash Victims Statewide",
        description: "Former Defense Attorney Now Fighting for Injured Drivers Throughout All 58 California Counties"
      }}
    >
      {/* Comprehensive Overview */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California's Car Accident Crisis</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Every three minutes, someone is injured in a car accident on California roads. With over 3,500 traffic fatalities and more than 275,000 injuries annually, vehicle collisions devastate thousands of California families each year. At Trembach Law Firm, we leverage our former defense attorney insight to expose insurance company tactics and secure maximum compensation for accident victims from San Diego to Crescent City, from the Pacific Coast to the Nevada border.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          California's unique traffic challenges create diverse accident scenarios requiring experienced legal representation. Dense urban traffic in Los Angeles and the Bay Area produces different collision patterns than rural highways in the Central Valley or winding mountain roads in the Sierra Nevada. Coastal fog, desert heat, mountain snow, and sudden rain after droughts each create specific hazards.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The aftermath of a serious car accident extends far beyond immediate injuries and vehicle damage. Victims face mounting medical bills while unable to work, insurance companies that promise support but deliver resistance, and long-term consequences that may not fully manifest for months. Understanding your rights and options becomes crucial for protecting your future.
        </p>
      </Card>

      {/* Insurance Company Tactics */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Insurance Company Tactics Exposed</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Insurance companies deploy sophisticated tactics to minimize payouts despite advertising suggesting they're "on your side." Adjusters receive extensive training in psychological techniques designed to elicit statements that reduce claim value. Our former defense attorney experience provides unmatched insight into these strategies.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Common Tactics</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Quick settlement pressure</li>
              <li>• Recorded statement traps</li>
              <li>• Medical record fishing expeditions</li>
              <li>• Social media surveillance</li>
              <li>• Delay tactics to create pressure</li>
              <li>• Lowball initial offers</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Our Counter-Strategies</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Immediate evidence preservation</li>
              <li>• Professional documentation</li>
              <li>• Expert witness coordination</li>
              <li>• Comprehensive damage calculation</li>
              <li>• Strategic negotiation timing</li>
              <li>• Trial preparation leverage</li>
            </ul>
          </Card>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Computer algorithms calculate settlement offers based on formulas favoring insurers, not fair compensation. Surveillance teams monitor social media and daily activities seeking any evidence to dispute injuries. Without experienced representation, accident victims face an unfair battle against corporate resources focused on protecting profits.
        </p>
      </Card>

      {/* California's Legal Framework */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California's Pure Comparative Negligence</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          California's pure comparative negligence system represents both opportunity and challenge for accident victims. Unlike contributory negligence states where any fault bars recovery, California allows compensation even when victims bear primary responsibility for accidents. However, this system also enables insurance companies to argue inflated fault percentages.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">How It Works</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Fault assigned by percentage</li>
              <li>• Compensation reduced by fault %</li>
              <li>• Can recover even if mostly at fault</li>
              <li>• Each party pays their percentage</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Strategic Implications</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Fault allocation is crucial</li>
              <li>• Evidence preservation vital</li>
              <li>• Expert reconstruction important</li>
              <li>• Every percentage point matters</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Common Scenarios</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Multi-vehicle accidents</li>
              <li>• Pedestrian/bicycle cases</li>
              <li>• Weather-related crashes</li>
              <li>• Intersection collisions</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Types of Car Accidents */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California Car Accident Types We Handle</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Intersection Accidents</h3>
            <p className="text-muted-foreground mb-4">Red light running, failure to yield, and left-turn collisions at California's busy intersections.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Red light violations</li>
              <li>• Stop sign failures</li>
              <li>• Left-turn accidents</li>
              <li>• Blind intersection crashes</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Freeway Collisions</h3>
            <p className="text-muted-foreground mb-4">High-speed crashes on California's extensive freeway system requiring specialized investigation.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Rear-end collisions</li>
              <li>• Lane change accidents</li>
              <li>• Merge failures</li>
              <li>• Multi-vehicle pileups</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Distracted Driving</h3>
            <p className="text-muted-foreground mb-4">Cell phone use, texting, and other distractions causing preventable California crashes.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Texting while driving</li>
              <li>• Cell phone conversations</li>
              <li>• GPS/navigation distractions</li>
              <li>• Eating while driving</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">DUI Accidents</h3>
            <p className="text-muted-foreground mb-4">Drunk and drugged driving collisions with enhanced liability and punitive damages.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Alcohol impairment</li>
              <li>• Drug impairment</li>
              <li>• Prescription medication effects</li>
              <li>• Commercial driver violations</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Weather-Related</h3>
            <p className="text-muted-foreground mb-4">Rain, fog, and other California weather conditions creating hazardous driving.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• First rain hydroplaning</li>
              <li>• Coastal fog accidents</li>
              <li>• Mountain snow/ice</li>
              <li>• Desert dust storms</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Rideshare Accidents</h3>
            <p className="text-muted-foreground mb-4">Uber, Lyft, and other rideshare collisions with complex insurance coverage issues.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Driver coverage gaps</li>
              <li>• Company liability</li>
              <li>• Passenger injuries</li>
              <li>• Third-party claims</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="content-card p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Injured in a Car Accident?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          Don't let insurance companies take advantage of you. Our experienced car accident attorneys provide immediate consultation to protect your rights and pursue maximum compensation. Time is critical for evidence preservation and meeting legal deadlines.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Free Accident Case Review
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Call (555) 123-4567
          </Button>
        </div>
      </Card>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default CarAccidentsNew;