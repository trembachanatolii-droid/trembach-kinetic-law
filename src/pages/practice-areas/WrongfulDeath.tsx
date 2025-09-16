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
  User,
  Construction,
  Wrench
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/wrongful-death-hero.jpg';
import sidebarImage from '@/assets/practice-areas/wrongful-death.jpg';

const WrongfulDeath = () => {
  return (
    <ComprehensivePracticeAreaTemplate
      seo={{
        title: "California Wrongful Death Attorneys | Pursuing Justice When Negligence Steals Lives",
        description: "Expert wrongful death lawyers providing compassionate representation throughout California. Former defense attorney now advocating for grieving families. Free consultation.",
        canonical: "/practice-areas/wrongful-death"
      }}
      hero={{
        backgroundImage: heroImage,
        title: "California Wrongful Death Attorneys",
        subtitle: "Pursuing Justice When Negligence Steals Lives",
        description: "Former Defense Attorney Now Advocating for Grieving Families Throughout All 58 California Counties"
      }}
    >
      {/* Comprehensive Overview */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">When Negligence Steals Lives</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          The sudden loss of a loved one due to another's negligence creates a devastating void that no amount of compensation can truly fill, yet California law recognizes that surviving family members deserve financial justice for the profound losses they endure. At Trembach Law Firm, we leverage our former defense attorney experience to guide grieving families through the complex wrongful death legal process, ensuring maximum recovery from those whose negligence, recklessness, or intentional acts stole irreplaceable lives and shattered families forever.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Wrongful death transcends mere legal terminology—it represents the ultimate price families pay for systemic failures in safety, accountability, and corporate responsibility. Whether caused by drunk drivers destroying families in seconds, medical professionals betraying sacred trusts through malpractice, corporations prioritizing profits over worker safety, or property owners ignoring known hazards, each wrongful death represents a preventable tragedy that proper care would have avoided.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The permanence of death makes these cases uniquely challenging, as families must navigate overwhelming grief while confronting insurance companies and defense attorneys who view their loved ones as statistics rather than irreplaceable human beings. California's wrongful death statutes provide specific frameworks for recovery, but the path to justice requires sophisticated legal navigation through statutory requirements, damage calculations, and procedural complexities.
        </p>
      </Card>

      {/* California Wrongful Death Law */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California's Wrongful Death Legal Framework</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          The legal framework surrounding wrongful death in California evolved from English common law that originally provided no remedy for death, based on the principle that personal injury claims died with the victim. California's wrongful death statutes now provide comprehensive remedies, recognizing that while money cannot restore lost lives, families deserve compensation for economic and emotional devastation caused by preventable deaths.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Who Can Sue</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Surviving spouse</li>
              <li>• Children of the deceased</li>
              <li>• Domestic partners</li>
              <li>• Financial dependents</li>
              <li>• Parents (if no spouse/children)</li>
              <li>• Legal guardians</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Recoverable Damages</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Lost financial support</li>
              <li>• Loss of love and companionship</li>
              <li>• Funeral and burial expenses</li>
              <li>• Medical expenses before death</li>
              <li>• Lost household services</li>
              <li>• Loss of gifts and benefits</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Time Limitations</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Two-year statute of limitations</li>
              <li>• Discovery rule exceptions</li>
              <li>• Government claim deadlines</li>
              <li>• Medical malpractice variations</li>
              <li>• Product liability timeframes</li>
              <li>• Criminal case extensions</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Types of Wrongful Death Cases */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California Wrongful Death Case Types</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Vehicle Accidents</h3>
            <p className="text-muted-foreground mb-4">Traffic collisions causing fatalities through driver negligence, recklessness, or impairment.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Drunk driving fatalities</li>
              <li>• Truck accident deaths</li>
              <li>• Motorcycle accident fatalities</li>
              <li>• Pedestrian and bicycle deaths</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Medical Malpractice</h3>
            <p className="text-muted-foreground mb-4">Healthcare professional negligence resulting in preventable deaths.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Surgical errors</li>
              <li>• Misdiagnosis and delayed diagnosis</li>
              <li>• Medication errors</li>
              <li>• Birth injury deaths</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Workplace Accidents</h3>
            <p className="text-muted-foreground mb-4">Job-related fatalities from safety violations and negligent conditions.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Construction site deaths</li>
              <li>• Industrial accidents</li>
              <li>• Third-party liability cases</li>
              <li>• Toxic exposure deaths</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Product Liability</h3>
            <p className="text-muted-foreground mb-4">Defective products causing fatal injuries through design or manufacturing flaws.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Defective medical devices</li>
              <li>• Dangerous pharmaceuticals</li>
              <li>• Automotive defects</li>
              <li>• Consumer product failures</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Premises Liability</h3>
            <p className="text-muted-foreground mb-4">Property owner negligence creating deadly conditions for visitors.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Swimming pool drownings</li>
              <li>• Security negligence</li>
              <li>• Structural collapses</li>
              <li>• Toxic exposure on property</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Criminal Acts</h3>
            <p className="text-muted-foreground mb-4">Third-party criminal conduct where property owners or others failed in security duties.</p>
            <ul className="text-muted-foreground space-y-1">
              <li>• Inadequate security deaths</li>
              <li>• Nightclub and bar violence</li>
              <li>• Retail establishment attacks</li>
              <li>• Apartment complex assaults</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Damage Calculation */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Comprehensive Damage Assessment</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Calculating wrongful death damages requires sophisticated economic modeling and deep understanding of family relationships. Our former defense attorney insight reveals how defendants minimize life values, enabling us to counter their strategies with compelling evidence of true losses.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Economic Losses</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Lost lifetime earnings</li>
              <li>• Lost benefits and retirement</li>
              <li>• Household services value</li>
              <li>• Educational contributions to children</li>
              <li>• Investment and financial guidance</li>
              <li>• Business and career mentorship</li>
              <li>• Property maintenance contributions</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Non-Economic Losses</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Loss of love and companionship</li>
              <li>• Loss of consortium</li>
              <li>• Parental guidance and comfort</li>
              <li>• Moral and emotional support</li>
              <li>• Protection and security</li>
              <li>• Training and education</li>
              <li>• Society and companionship</li>
            </ul>
          </Card>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We work with economists, vocational experts, and family specialists to paint complete pictures of losses, ensuring juries understand the full scope of what families have lost. Every relationship is unique, and our comprehensive approach honors those unique bonds while maximizing recovery.
        </p>
      </Card>

      {/* Supporting Families */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Compassionate Support During Crisis</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          The financial devastation following wrongful death compounds emotional trauma as families face immediate funeral expenses, lost income, and uncertain futures without their providers, protectors, and partners. Insurance companies exploit this financial pressure, offering quick settlements that seem substantial but fail to address lifetime losses.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Immediate Needs</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Funeral and burial arrangements</li>
              <li>• Emergency financial support</li>
              <li>• Insurance claim guidance</li>
              <li>• Estate and probate coordination</li>
              <li>• Bill management assistance</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Legal Protection</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Evidence preservation</li>
              <li>• Insurance company communication</li>
              <li>• Settlement negotiation</li>
              <li>• Court representation</li>
              <li>• Expert witness coordination</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Long-Term Security</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Financial planning guidance</li>
              <li>• Education fund protection</li>
              <li>• Structured settlement options</li>
              <li>• Tax optimization strategies</li>
              <li>• Trust establishment</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="content-card p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Lost a Loved One to Negligence?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          While nothing can bring back your loved one, you deserve justice and financial security for your family's future. Our compassionate wrongful death attorneys provide supportive guidance through this devastating time while aggressively pursuing maximum compensation. Time limits apply, so immediate consultation is essential.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Compassionate Legal Consultation
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Call (555) 123-4567
          </Button>
        </div>
      </Card>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default WrongfulDeath;