import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Heart,
  Shield,
  Scale,
  Clock,
  Users,
  Award,
  FileText,
  AlertTriangle,
  Stethoscope,
  Building,
  Map,
  ArrowLeft,
  Bike,
  Construction,
  Wrench
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/bicycle-accidents-hero.jpg';
import sidebarImage from '@/assets/practice-areas/bicycle-accidents.jpg';

const BicycleAccidents = () => {
  return (
    <ComprehensivePracticeAreaTemplate
      seo={{
        title: "California Bicycle Accident Lawyers | Protecting Cyclists' Rights",
        description: "Expert bicycle accident attorneys protecting cyclists throughout California. Former defense counsel now fighting driver negligence. Free consultation for bike injury cases.",
        canonical: "/practice-areas/bicycle-accidents"
      }}
      hero={{
        backgroundImage: heroImage,
        title: "California Bicycle Accident Lawyers",
        subtitle: "Protecting Cyclists' Rights Against Driver Negligence",
        description: "Former Defense Attorney Now Fighting for Injured Cyclists Throughout All 58 California Counties"
      }}
    >
      {/* Comprehensive Overview */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California's Bicycle Safety Crisis</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          California leads the nation in bicycle commuting, recreational cycling, and unfortunately, cyclist fatalities, with over 150 deaths and 13,000 injuries annually from bicycle-vehicle collisions. When a 4,000-pound vehicle strikes a 20-pound bicycle, the cyclist bears catastrophic consequences while drivers walk away unharmed, yet insurance companies systematically blame cyclists for accidents caused by driver inattention, aggression, and failure to share the road safely. At Trembach Law Firm, we leverage our former defense attorney insight to expose these discriminatory tactics and secure maximum compensation for cyclists whose lives have been forever changed by preventable collisions.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          The vulnerability of cyclists on California roads cannot be understated—despite following traffic laws, wearing protective gear, and riding defensively, cyclists remain exposed to devastating injuries when drivers fail to look before turning, pass too closely, open doors without checking, or simply refuse to acknowledge bicycles as legitimate road users with equal rights. The resulting injuries typically include traumatic brain injuries despite helmet use, spinal cord damage from high-impact collisions, complex fractures requiring multiple surgeries, and severe road rash causing permanent scarring.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          California's progressive bicycle laws, including the Three Feet for Safety Act and complete streets legislation, recognize cycling as essential transportation deserving protection, not merely recreation tolerating cars' leftover space. Yet enforcement remains sporadic, infrastructure inadequate, and driver attitudes hostile toward cyclists exercising their legal rights to road use.
        </p>
      </Card>

      {/* Insurance Company Anti-Cyclist Bias */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Fighting Anti-Cyclist Insurance Tactics</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Our former defense attorney experience reveals exactly how insurance companies approach bicycle accident claims with predetermined strategies to minimize compensation. We know their training emphasizes investigating helmet use regardless of injury location, arguing cyclists should use sidewalks despite legal road rights, claiming visibility issues even in broad daylight, and asserting assumption of risk for choosing to cycle.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Common Bias Tactics</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• "Cyclists don't belong on roads"</li>
              <li>• Helmet victim-blaming for all injuries</li>
              <li>• "Should have used sidewalk" arguments</li>
              <li>• Visibility questioning in daylight</li>
              <li>• "Assumption of risk" theories</li>
              <li>• Speed differential minimization</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Our Defense Strategies</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Legal road rights documentation</li>
              <li>• Driver duty violations proof</li>
              <li>• Helmet effectiveness limitations</li>
              <li>• Infrastructure analysis</li>
              <li>• Three-foot law violations</li>
              <li>• Cyclist vulnerability emphasis</li>
            </ul>
          </Card>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          This insider knowledge enables us to anticipate and defeat these tactics, transforming what insurers see as easy targets into strong cases demanding fair compensation. We educate all parties about cyclists' legitimate road rights and the severe consequences of driver negligence.
        </p>
      </Card>

      {/* California Bicycle Laws */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California's Progressive Bicycle Laws</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          California has enacted comprehensive legislation protecting cyclists and establishing clear driver duties. These laws provide strong foundations for bicycle accident claims when properly understood and applied.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Three Feet for Safety Act</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Minimum 3-foot passing distance</li>
              <li>• Slow down when space insufficient</li>
              <li>• Wait for safe passing opportunity</li>
              <li>• No unsafe passing allowed</li>
              <li>• Enhanced penalties for violations</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Cyclist Road Rights</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Full road use rights</li>
              <li>• Same traffic law protections</li>
              <li>• Lane positioning flexibility</li>
              <li>• Intersection right-of-way</li>
              <li>• Protection from harassment</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Infrastructure Requirements</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Complete Streets policies</li>
              <li>• Bike lane maintenance duties</li>
              <li>• Safe intersection design</li>
              <li>• Adequate signage requirements</li>
              <li>• Construction zone protections</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Types of Bicycle Accidents */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California Bicycle Accident Types</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Right Hook Accidents</h3>
            <p className="text-muted-foreground mb-4">Most common bicycle accident where drivers turn right across cyclists' paths at intersections.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Intersection right turns</li>
              <li>• Driveway and parking lot entries</li>
              <li>• Bike lane crossing violations</li>
              <li>• Blind spot failures</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Dooring Incidents</h3>
            <p className="text-muted-foreground mb-4">Car doors opened into cyclists' paths, particularly dangerous in urban areas with street parking.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Driver door openings</li>
              <li>• Passenger door impacts</li>
              <li>• Rideshare passenger exits</li>
              <li>• Parked car door zones</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Left Turn Collisions</h3>
            <p className="text-muted-foreground mb-4">Drivers turning left into oncoming cyclists, often claiming "I didn't see the bike."</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Intersection left turns</li>
              <li>• U-turn collisions</li>
              <li>• Parking lot exits</li>
              <li>• Driveway departures</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Close Passing</h3>
            <p className="text-muted-foreground mb-4">Vehicles passing too closely, violating California's Three Feet for Safety Act.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Less than 3-foot clearance</li>
              <li>• High-speed passing</li>
              <li>• Aggressive driver behavior</li>
              <li>• Mirror and door strikes</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Rear-End Collisions</h3>
            <p className="text-muted-foreground mb-4">Distracted or impaired drivers striking cyclists from behind, often at traffic lights.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Stopped at traffic signals</li>
              <li>• Slow-moving uphill sections</li>
              <li>• Distracted driver strikes</li>
              <li>• DUI-related collisions</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Infrastructure Defects</h3>
            <p className="text-muted-foreground mb-4">Dangerous road conditions and inadequate bicycle infrastructure causing crashes.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Bike lane maintenance failures</li>
              <li>• Intersection design defects</li>
              <li>• Construction zone hazards</li>
              <li>• Debris and obstruction</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Bicycle Accident Injuries */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Severe Bicycle Accident Injuries</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Bicycle accidents create unique injury patterns reflecting the physics of lightweight bikes versus heavy vehicles. Insurance companies often undervalue these injuries or claim they're "expected" from cycling.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Common Severe Injuries</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Traumatic brain injuries</li>
              <li>• Spinal cord damage</li>
              <li>• Clavicle and shoulder fractures</li>
              <li>• Severe road rash and scarring</li>
              <li>• Hand and wrist injuries</li>
              <li>• Facial injuries and dental damage</li>
              <li>• Lower extremity fractures</li>
              <li>• Internal organ damage</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Long-Term Consequences</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Permanent scarring and disfigurement</li>
              <li>• Chronic pain conditions</li>
              <li>• Limited mobility and function</li>
              <li>• Multiple reconstructive surgeries</li>
              <li>• Fear of cycling again</li>
              <li>• Post-traumatic stress disorder</li>
              <li>• Career and lifestyle limitations</li>
              <li>• Lost cycling community connection</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Comprehensive Compensation */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Comprehensive Compensation for Cyclists</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Bicycle accident cases require specialized understanding of cycling culture, infrastructure, and the unique vulnerabilities cyclists face. We ensure comprehensive compensation addressing all aspects of impact.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Economic Damages</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Medical treatment costs</li>
              <li>• Lost wages and benefits</li>
              <li>• Diminished earning capacity</li>
              <li>• Bicycle and equipment replacement</li>
              <li>• Transportation alternatives</li>
              <li>• Home and workplace modifications</li>
              <li>• Ongoing rehabilitation costs</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Non-Economic Damages</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Pain and suffering</li>
              <li>• Loss of cycling enjoyment</li>
              <li>• Disfigurement and scarring</li>
              <li>• Emotional distress</li>
              <li>• Loss of life activities</li>
              <li>• Family relationship impact</li>
              <li>• Community connection loss</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="content-card p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Injured While Cycling?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          Don't let insurance companies exploit anti-cyclist bias to deny fair compensation. Our experienced bicycle accident attorneys understand the cycling community and fight aggressively for your rights as a legitimate road user. You chose sustainable, healthy transportation—you deserve protection and respect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Free Bicycle Accident Review
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Call (555) 123-4567
          </Button>
        </div>
      </Card>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default BicycleAccidents;