import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import heroImage from '@/assets/practice-areas/pedestrian-accidents-hero.jpg';

const PedestrianAccidents = () => {
  return (
    <ComprehensivePracticeAreaTemplate
      seo={{
        title: "California Pedestrian Accident Lawyers | Justice for Vulnerable Road Users",
        description: "Expert pedestrian accident attorneys throughout California. Former defense lawyer now protecting vulnerable road users' rights. Free consultation for injury cases.",
        canonical: "/practice-areas/pedestrian-accidents"
      }}
      hero={{
        backgroundImage: heroImage,
        title: "California Pedestrian Accident Lawyers",
        subtitle: "Justice for Vulnerable Road Users",
        description: "Former Defense Attorney Now Protecting Pedestrian Rights Throughout All 58 California Counties"
      }}
    >
      {/* Comprehensive Overview */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California's Pedestrian Safety Crisis</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Every 25 minutes, a pedestrian dies in a traffic accident somewhere in America, with California accounting for nearly 25% of all pedestrian fatalities nationwide despite having only 12% of the nation's population. In 2023 alone, over 1,000 California pedestrians lost their lives to vehicle strikes, while thousands more suffered catastrophic injuries that forever altered their futures. At Trembach Law Firm, we leverage our former defense attorney background to expose how insurance companies systematically blame pedestrians for accidents caused by driver negligence, ensuring maximum compensation for victims who were simply walking when vehicles destroyed their lives.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          The vulnerability of pedestrians cannot be overstated—when thousands of pounds of steel strike an unprotected human body, the results are devastating. Unlike vehicle occupants protected by airbags, seatbelts, and crumple zones, pedestrians absorb direct impact forces causing traumatic brain injuries from pavement strikes, spinal damage from vehicle impact, crushing injuries to organs and limbs, and massive internal trauma. Even low-speed impacts that would cause minor vehicle damage can kill or permanently disable pedestrians.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          California's Vision Zero initiatives and Complete Streets policies acknowledge that pedestrian deaths are preventable tragedies, not inevitable accidents. Despite marked crosswalks, pedestrian signals, and vehicle code protections, drivers continue to strike pedestrians while turning without looking, speeding through residential areas, texting while driving, running red lights, and failing to yield at crosswalks.
        </p>
      </Card>

      {/* Insurance Company Bias */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Insurance Company Anti-Pedestrian Bias</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Our former defense attorney experience reveals exactly how insurance companies approach pedestrian accident claims with predetermined bias. Adjusters receive training to investigate jaywalking regardless of actual crossing location, question pedestrian visibility despite broad daylight, argue comparative fault for legal crosswalk use, and minimize injuries as "expected" from choosing to walk.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Systematic Bias Tactics</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Automatic jaywalking investigations</li>
              <li>• "Pedestrian came out of nowhere" claims</li>
              <li>• Visibility questioning in daylight</li>
              <li>• Clothing color scrutiny</li>
              <li>• Alcohol testing demands</li>
              <li>• Cell phone distraction allegations</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Our Counter-Strategies</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Traffic light timing analysis</li>
              <li>• Crosswalk compliance documentation</li>
              <li>• Driver distraction investigation</li>
              <li>• Speed analysis and reconstruction</li>
              <li>• Visibility studies and testing</li>
              <li>• Municipal signal timing review</li>
            </ul>
          </Card>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We know their playbook because we helped write it, and now we use that insider knowledge to protect pedestrian rights and secure maximum compensation. Every pedestrian has the right to safe passage, and we ensure that right is defended vigorously.
        </p>
      </Card>

      {/* California Pedestrian Law */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California Pedestrian Rights and Laws</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          California Vehicle Code provides comprehensive protections for pedestrians, establishing clear rights and driver duties that insurance companies often ignore or misrepresent. Understanding these laws is crucial for establishing liability and defeating insurance company tactics.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Crosswalk Rights</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Right-of-way in marked crosswalks</li>
              <li>• Right-of-way at intersections</li>
              <li>• Driver duty to yield</li>
              <li>• Signal compliance requirements</li>
              <li>• Sufficient crossing time rights</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Driver Duties</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Exercise due care at all times</li>
              <li>• Yield to pedestrians in crosswalks</li>
              <li>• Reduce speed in pedestrian areas</li>
              <li>• Avoid striking pedestrians</li>
              <li>• Sound horn when necessary</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Special Protections</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• School zone enhanced penalties</li>
              <li>• Disabled pedestrian protections</li>
              <li>• Construction zone safety</li>
              <li>• Senior citizen considerations</li>
              <li>• Children's safety zones</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Types of Pedestrian Accidents */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California Pedestrian Accident Types</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Crosswalk Accidents</h3>
            <p className="text-muted-foreground mb-4">Drivers failing to yield right-of-way to pedestrians lawfully using marked and unmarked crosswalks.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Right-turn on red failures</li>
              <li>• Left-turn yield violations</li>
              <li>• Through-traffic strikes</li>
              <li>• Signal violation crashes</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Parking Lot Incidents</h3>
            <p className="text-muted-foreground mb-4">Shopping centers, businesses, and residential parking areas where pedestrians mix with vehicles.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Backing vehicle accidents</li>
              <li>• Drive-through conflicts</li>
              <li>• Loading zone incidents</li>
              <li>• Distracted driver strikes</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">School Zone Accidents</h3>
            <p className="text-muted-foreground mb-4">Children walking to and from school face heightened risks requiring enhanced driver care.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• School crossing guard areas</li>
              <li>• Bus stop accidents</li>
              <li>• Speeding in school zones</li>
              <li>• Drop-off/pick-up conflicts</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Residential Areas</h3>
            <p className="text-muted-foreground mb-4">Neighborhood streets where pedestrians reasonably expect safe passage near their homes.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Driveway backing incidents</li>
              <li>• Street crossing accidents</li>
              <li>• Sidewalk encroachment</li>
              <li>• Speeding through neighborhoods</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Public Transit Areas</h3>
            <p className="text-muted-foreground mb-4">Bus stops, train stations, and transit centers with high pedestrian volumes.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Bus stop boarding accidents</li>
              <li>• Transit platform incidents</li>
              <li>• Station access collisions</li>
              <li>• Transit vehicle strikes</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Construction Zones</h3>
            <p className="text-muted-foreground mb-4">Work zones that alter normal pedestrian paths and create dangerous conditions.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Inadequate pedestrian detours</li>
              <li>• Missing safety barriers</li>
              <li>• Poor signage and warnings</li>
              <li>• Construction vehicle accidents</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Catastrophic Pedestrian Injuries */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Catastrophic Pedestrian Injuries</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Pedestrian accidents create devastating injury patterns reflecting the physics of unprotected human bodies struck by massive vehicles. We work with top medical experts to fully document all injuries and their lifelong implications.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Common Severe Injuries</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Traumatic brain injuries</li>
              <li>• Spinal cord damage and paralysis</li>
              <li>• Multiple bone fractures</li>
              <li>• Internal organ damage</li>
              <li>• Crushing injuries</li>
              <li>• Severe road rash and abrasions</li>
              <li>• Amputations</li>
              <li>• Facial injuries and disfigurement</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Long-Term Impact</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Permanent disability care</li>
              <li>• Cognitive and memory impairment</li>
              <li>• Mobility limitations</li>
              <li>• Chronic pain management</li>
              <li>• Multiple reconstructive surgeries</li>
              <li>• Home and vehicle modifications</li>
              <li>• Lost independence</li>
              <li>• Family caregiver burden</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="content-card p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Injured as a Pedestrian?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          Don't let insurance companies blame you for being struck while lawfully walking. Our experienced pedestrian accident attorneys understand the challenges vulnerable road users face and fight aggressively against anti-pedestrian bias. You have the right to safe passage, and we defend that right vigorously.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Free Pedestrian Accident Review
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Call (555) 123-4567
          </Button>
        </div>
      </Card>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default PedestrianAccidents;