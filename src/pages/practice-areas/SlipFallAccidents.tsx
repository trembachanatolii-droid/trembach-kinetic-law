import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import heroImage from '@/assets/practice-areas/slip-fall-hero.jpg';

const SlipFallAccidents = () => {
  return (
    <ComprehensivePracticeAreaTemplate
      seo={{
        title: "California Slip and Fall Lawyers | Holding Property Owners Accountable",
        description: "Expert slip and fall attorneys throughout California. Former defense lawyer now fighting for injured victims on dangerous properties. Free consultation for premises liability cases.",
        canonical: "/practice-areas/slip-and-fall-accidents"
      }}
      hero={{
        backgroundImage: heroImage,
        title: "California Slip and Fall Lawyers",
        subtitle: "Holding Property Owners Accountable for Preventable Injuries",
        description: "Former Defense Attorney Now Fighting for Injured Victims Throughout All 58 California Counties"
      }}
    >
      {/* Comprehensive Overview */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California's Premises Liability Crisis</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Every year, millions of Americans suffer injuries from slip and fall accidents, with California's diverse properties—from rain-slicked retail stores to poorly maintained apartment complexes—creating countless hazards that property owners fail to address despite clear legal duties to maintain safe premises. At Trembach Law Firm, we leverage our former defense attorney insight to expose how property owners and their insurance companies systematically deny responsibility for dangerous conditions, ensuring maximum compensation for victims whose lives have been disrupted by preventable falls that proper maintenance would have avoided.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Slip and fall accidents might sound minor, but the reality proves devastating—traumatic brain injuries from head strikes, spinal damage from awkward landings, hip fractures requiring surgery and rehabilitation, and shoulder injuries from attempting to break falls. These injuries particularly devastate elderly victims who face extended recovery periods, permanent mobility limitations, and dramatically increased mortality risks following fall-related fractures. Young adults lose income during prime earning years, parents cannot care for children, and active individuals face permanent lifestyle restrictions.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          California premises liability law establishes clear duties for property owners to maintain safe conditions, regularly inspect for hazards, warn about known dangers, and remedy problems within reasonable timeframes. Yet property owners routinely violate these obligations through deferred maintenance saving money, inadequate staffing reducing costs, ignoring known hazards hoping incidents won't occur, and failing to adapt properties for weather conditions.
        </p>
      </Card>

      {/* Property Owner Duties */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California Property Owner Legal Duties</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          California premises liability law creates specific obligations for property owners based on visitor status and property type. Understanding these duties is crucial for establishing liability when dangerous conditions cause injuries.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Duty to Invitees</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Highest duty of care</li>
              <li>• Regular safety inspections</li>
              <li>• Reasonable efforts to discover hazards</li>
              <li>• Prompt warning of known dangers</li>
              <li>• Timely hazard correction</li>
              <li>• Safe access and egress</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Duty to Licensees</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Warn of known hazards</li>
              <li>• No duty to inspect</li>
              <li>• Share actual knowledge</li>
              <li>• Avoid willful/wanton conduct</li>
              <li>• Reasonable care standard</li>
              <li>• Social guest protections</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Special Circumstances</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Children's attractive nuisance</li>
              <li>• Disabled visitor accommodations</li>
              <li>• Emergency situation duties</li>
              <li>• Weather-related obligations</li>
              <li>• Construction zone safety</li>
              <li>• Criminal activity prevention</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Defense Tactics Revealed */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Property Owner Defense Tactics Exposed</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Our former defense attorney experience reveals precisely how property owners and their insurers approach slip and fall claims with predetermined strategies to avoid responsibility. We know their immediate response protocols documenting scenes to support defense narratives, their investigation tactics seeking to blame victims, and their expert witnesses who testify that any condition can be navigated safely with proper attention.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Common Defense Strategies</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• "Open and obvious" hazard claims</li>
              <li>• Victim distraction allegations</li>
              <li>• Improper footwear arguments</li>
              <li>• Intoxication testing demands</li>
              <li>• Medical condition blame</li>
              <li>• Comparative fault maximization</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Our Counter-Strategies</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Comprehensive scene documentation</li>
              <li>• Expert engineering analysis</li>
              <li>• Maintenance record subpoenas</li>
              <li>• Prior incident discovery</li>
              <li>• Industry standard violations</li>
              <li>• Victim activity reconstruction</li>
            </ul>
          </Card>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          This insider knowledge transforms our representation from reactive to proactive, anticipating and defeating defense tactics before they develop. We understand their settlement calculations deliberately undervaluing legitimate injuries and position cases for maximum recovery through comprehensive preparation.
        </p>
      </Card>

      {/* Types of Slip and Fall Accidents */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California Slip and Fall Accident Types</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Retail Store Accidents</h3>
            <p className="text-muted-foreground mb-4">Grocery stores, department stores, and shopping centers with various slip and trip hazards.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Spilled liquids and produce</li>
              <li>• Wet floor maintenance</li>
              <li>• Merchandise on floors</li>
              <li>• Poor lighting conditions</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Restaurant and Bar Falls</h3>
            <p className="text-muted-foreground mb-4">Food service establishments with unique hazards from food, drinks, and high activity levels.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Kitchen grease and spills</li>
              <li>• Bathroom maintenance failures</li>
              <li>• Outdoor dining hazards</li>
              <li>• Bar area slip conditions</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Apartment Complex Falls</h3>
            <p className="text-muted-foreground mb-4">Residential properties with maintenance and lighting issues affecting tenant safety.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Stairway defects and lighting</li>
              <li>• Pool area slip hazards</li>
              <li>• Parking lot maintenance</li>
              <li>• Walkway trip hazards</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Office Building Incidents</h3>
            <p className="text-muted-foreground mb-4">Commercial buildings where workers and visitors face slip and trip dangers.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Lobby maintenance issues</li>
              <li>• Elevator and stairway defects</li>
              <li>• Parking garage hazards</li>
              <li>• Weather-related conditions</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Hotels and Hospitality</h3>
            <p className="text-muted-foreground mb-4">Hospitality properties with high guest turnover and various slip hazards.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Pool and spa area falls</li>
              <li>• Bathroom and shower accidents</li>
              <li>• Lobby and restaurant spills</li>
              <li>• Stairway and balcony defects</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Public Property Falls</h3>
            <p className="text-muted-foreground mb-4">Government properties with unique claim procedures and sovereign immunity issues.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Sidewalk defects and maintenance</li>
              <li>• Public building hazards</li>
              <li>• Park and recreation accidents</li>
              <li>• Transit facility incidents</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Slip and Fall Injuries */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Serious Slip and Fall Injuries</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          The simplicity of the accident mechanism belies the complexity of resulting injuries and legal claims. Falls create unique injury patterns based on landing position, surface type, and victim age, often resulting in multiple injuries requiring comprehensive medical evaluation.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Common Severe Injuries</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Traumatic brain injuries from head strikes</li>
              <li>• Hip fractures requiring surgery</li>
              <li>• Spinal injuries from awkward landings</li>
              <li>• Shoulder and rotator cuff tears</li>
              <li>• Wrist and forearm fractures</li>
              <li>• Knee and ankle injuries</li>
              <li>• Tailbone and pelvis fractures</li>
              <li>• Facial injuries and dental damage</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Long-Term Consequences</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Permanent mobility limitations</li>
              <li>• Chronic pain and arthritis</li>
              <li>• Multiple surgical procedures</li>
              <li>• Extended rehabilitation needs</li>
              <li>• Fear of falling again</li>
              <li>• Loss of independence</li>
              <li>• Career and activity restrictions</li>
              <li>• Increased mortality risk (elderly)</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Proving Liability */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Proving Property Owner Liability</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Successful slip and fall cases require proving property owners knew or should have known about dangerous conditions and failed to remedy them within reasonable timeframes. Our comprehensive investigation approach uncovers the evidence needed to establish liability.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Evidence Collection</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Scene photographs and measurements</li>
              <li>• Surveillance video acquisition</li>
              <li>• Witness interviews and statements</li>
              <li>• Maintenance records subpoenas</li>
              <li>• Prior incident documentation</li>
              <li>• Weather condition analysis</li>
              <li>• Expert engineering evaluation</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Liability Theories</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Actual knowledge of hazard</li>
              <li>• Constructive notice doctrine</li>
              <li>• Mode of operation liability</li>
              <li>• Negligent inspection procedures</li>
              <li>• Building code violations</li>
              <li>• Industry standard breaches</li>
              <li>• Comparative fault minimization</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="content-card p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Injured in a Slip and Fall?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          Don't let property owners escape responsibility for dangerous conditions that caused your injuries. Our experienced slip and fall attorneys understand the complexities of premises liability law and fight aggressively against insurance company tactics designed to deny fair compensation. Every property owner has a duty to maintain safe conditions—we ensure that duty is enforced.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Free Slip and Fall Case Review
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Call (555) 123-4567
          </Button>
        </div>
      </Card>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default SlipFallAccidents;