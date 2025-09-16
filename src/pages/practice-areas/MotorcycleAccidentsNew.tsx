import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import heroImage from '@/assets/practice-areas/motorcycle-accidents-hero.jpg';

const MotorcycleAccidentsNew = () => {
  return (
    <ComprehensivePracticeAreaTemplate
      seo={{
        title: "California Motorcycle Accident Lawyers | Defeating Bias, Maximizing Recovery",
        description: "Expert motorcycle accident attorneys fighting bias throughout California. Former defense attorney now protecting injured riders' rights. Free consultation.",
        canonical: "/practice-areas/motorcycle-accidents"
      }}
      hero={{
        backgroundImage: heroImage,
        title: "California Motorcycle Accident Lawyers",
        subtitle: "Defeating Bias, Maximizing Recovery for Riders",
        description: "Former Defense Attorney Now Fighting for Injured Motorcyclists Throughout All 58 California Counties"
      }}
    >
      {/* Comprehensive Overview */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California's Motorcycle Community Under Attack</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          California's year-round riding weather and diverse scenic routes make it home to over 800,000 registered motorcycles, more than any other state. From daily commuters navigating Los Angeles traffic to weekend warriors exploring Pacific Coast Highway, from adventure riders tackling mountain passes to touring enthusiasts crossing deserts, California's motorcycle community embodies freedom, efficiency, and passion. Yet when negligent drivers cause accidents, injured riders face not only devastating physical injuries but also systematic bias from insurance companies, law enforcement, and even potential jurors who wrongly assume motorcyclists are reckless thrill-seekers responsible for their own injuries.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          At Trembach Law Firm, we leverage our former defense attorney knowledge to expose and defeat the discriminatory tactics insurance companies use against motorcycle accident victims. We understand how insurers train adjusters to blame riders, minimize motorcycle accident injuries, and exploit stereotypes to reduce payouts. This insider knowledge, combined with our deep respect for motorcycle culture and comprehensive understanding of California's unique lane-splitting laws, enables us to secure maximum compensation for riders who have been wronged by careless drivers.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The physics of motorcycle accidents create injury patterns far more severe than typical vehicle collisions. Without the protective cage of a car, airbags, or crumple zones, riders absorb impact forces directly through their bodies. Even low-speed collisions can launch riders onto pavement or into fixed objects, causing road rash, fractures, traumatic brain injuries, and spinal damage.
        </p>
      </Card>

      {/* Fighting Motorcycle Bias */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Fighting Anti-Motorcycle Bias</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Motorcycle accident victims face systematic discrimination that car accident victims never experience. Insurance companies, police officers, and potential jurors often harbor unconscious bias against motorcyclists, viewing them as reckless risk-takers who "asked for it" by choosing to ride. This bias translates into reduced settlements, minimized injuries, and blamed victims.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Common Stereotypes</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• "Motorcyclists are speed demons"</li>
              <li>• "They weave through traffic dangerously"</li>
              <li>• "Riders are asking for trouble"</li>
              <li>• "Motorcycles are toys, not transportation"</li>
              <li>• "All bikers are outlaws"</li>
              <li>• "They don't follow traffic laws"</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Reality-Based Defense</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Professional commuters and workers</li>
              <li>• Law-abiding community members</li>
              <li>• Safety-conscious riders</li>
              <li>• Environmental responsibility</li>
              <li>• Traffic congestion solutions</li>
              <li>• Economic transportation choice</li>
            </ul>
          </Card>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We combat these prejudices through comprehensive case presentation that humanizes our clients and demonstrates their responsible riding behavior. We educate insurance companies, opposing counsel, and when necessary, juries about the reality of modern motorcycling and the respect riders deserve.
        </p>
      </Card>

      {/* California Lane Splitting Laws */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California's Unique Lane Splitting Laws</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          California stands alone in explicitly legalizing lane splitting, recognizing that when performed prudently, this practice reduces rear-end collision risks and traffic congestion. Yet insurance companies systematically misrepresent lane splitting to argue comparative fault, even when riders followed California Highway Patrol guidelines.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Legal Guidelines</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Safe when traffic slow/stopped</li>
              <li>• Maximum 10 mph faster than traffic</li>
              <li>• Avoid high-speed differentials</li>
              <li>• Consider road and weather conditions</li>
              <li>• Use leftmost lanes when possible</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Safety Benefits</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Reduces rear-end collisions</li>
              <li>• Decreases traffic congestion</li>
              <li>• Prevents overheating in stop-and-go</li>
              <li>• Improves overall traffic flow</li>
              <li>• Reduces emissions</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Insurance Tactics</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Mischaracterize legal lane splitting</li>
              <li>• Claim "reckless" behavior</li>
              <li>• Ignore safety guidelines</li>
              <li>• Blame rider for driver inattention</li>
              <li>• Minimize driver responsibility</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Types of Motorcycle Accidents */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Types of Motorcycle Accidents We Handle</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Left-Turn Collisions</h3>
            <p className="text-muted-foreground mb-4">The most common and deadly type of motorcycle accident, often involving "I didn't see the motorcycle" claims.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Intersection left turns</li>
              <li>• Driveway and parking lot exits</li>
              <li>• U-turn collisions</li>
              <li>• Traffic signal violations</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Lane Change Accidents</h3>
            <p className="text-muted-foreground mb-4">Drivers failing to check blind spots before changing lanes, often during legal lane splitting.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Blind spot failures</li>
              <li>• Improper lane splitting blame</li>
              <li>• Mirror adjustment issues</li>
              <li>• Distracted driving</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Dooring Incidents</h3>
            <p className="text-muted-foreground mb-4">Car doors opened into motorcycle paths, particularly dangerous in urban areas with street parking.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Passenger door openings</li>
              <li>• Driver door impacts</li>
              <li>• Parked car door zones</li>
              <li>• Rideshare passenger exits</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Road Hazards</h3>
            <p className="text-muted-foreground mb-4">Dangerous road conditions that affect motorcycles more severely than cars, including municipal liability.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Potholes and road defects</li>
              <li>• Construction zone hazards</li>
              <li>• Debris and obstacles</li>
              <li>• Poor road maintenance</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Rear-End Collisions</h3>
            <p className="text-muted-foreground mb-4">Often preventable through lane splitting, these accidents highlight the safety benefits of California's laws.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Stop-and-go traffic</li>
              <li>• Distracted following drivers</li>
              <li>• Tailgating incidents</li>
              <li>• Emergency braking situations</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Product Defects</h3>
            <p className="text-muted-foreground mb-4">Defective motorcycle parts, tires, or safety equipment contributing to accidents and injuries.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Tire defects and blowouts</li>
              <li>• Brake system failures</li>
              <li>• Helmet defects</li>
              <li>• Motorcycle part failures</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Unique Motorcycle Injuries */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Unique Motorcycle Injury Patterns</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Motorcycle accidents create injury patterns rarely seen in car crashes, requiring specialized medical and legal expertise. Insurance companies often undervalue these unique injuries or claim they're "expected" from motorcycle crashes.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Motorcycle-Specific Injuries</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Road rash and degloving injuries</li>
              <li>• "Biker's arm" nerve damage</li>
              <li>• Lower extremity fractures</li>
              <li>• Helmet-related head injuries</li>
              <li>• High-side and low-side injuries</li>
              <li>• Crush injuries from bike weight</li>
              <li>• Severe abrasions and scarring</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Long-Term Consequences</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Permanent scarring and disfigurement</li>
              <li>• Chronic pain conditions</li>
              <li>• Limited mobility and function</li>
              <li>• Multiple reconstructive surgeries</li>
              <li>• Post-traumatic stress disorder</li>
              <li>• Fear of riding again</li>
              <li>• Career and lifestyle limitations</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="content-card p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Injured in a Motorcycle Accident?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          Don't let insurance companies exploit anti-motorcycle bias to minimize your claim. Our experienced motorcycle accident attorneys understand the unique challenges riders face and fight aggressively for fair compensation. We respect the motorcycle community and defend your rights as a legitimate road user.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Free Motorcycle Accident Review
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Call (555) 123-4567
          </Button>
        </div>
      </Card>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default MotorcycleAccidentsNew;