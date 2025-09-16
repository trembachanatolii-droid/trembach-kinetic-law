import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import heroImage from '@/assets/practice-areas/silicosis-injuries-hero.jpg';

const SilicosisInjuries = () => {
  return (
    <ComprehensivePracticeAreaTemplate
      seo={{
        title: "California Silicosis Lawyers | Stone Workers Lung Disease Claims",
        description: "Expert legal representation for silicosis victims throughout California. Former defense attorney fighting for stone workers suffering from preventable lung disease. Free consultation.",
        canonical: "/practice-areas/silicosis-injuries"
      }}
      hero={{
        backgroundImage: heroImage,
        title: "California Silicosis Lawyers",
        subtitle: "Fighting for Stone Workers Suffering from Preventable Lung Disease",
        description: "Aggressive Legal Representation for Workers Exposed to Deadly Silica Dust Throughout California"
      }}
    >
      {/* Comprehensive Overview */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Understanding Silicosis in California</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          The epidemic of silicosis among California's stone fabrication workers represents one of the most devastating occupational health crises of the 21st century. Young workers, many in their 20s and 30s, face death sentences from an entirely preventable disease that employers could have avoided through basic safety measures. At Trembach Law Firm, we leverage insider knowledge from our defense attorney background to pursue maximum compensation for workers whose lungs have been destroyed by crystalline silica exposure.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Silicosis is not a new disease—it has been recognized for over a century as one of the most serious occupational hazards facing workers in dust-producing industries. Yet despite this long-standing knowledge, thousands of California workers continue to develop this incurable lung disease each year. The explosion of engineered stone countertop popularity has created a perfect storm of exposure, with fabrication shops throughout Los Angeles, San Francisco, Sacramento, Orange County, San Diego, and the Inland Empire operating without adequate protections.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Our firm stands at the forefront of silicosis litigation in California, understanding both the medical complexities of this progressive disease and the legal strategies necessary to hold employers and manufacturers accountable. We recognize that behind every silicosis case is a human tragedy—a worker who came to America seeking opportunity, only to have their dreams destroyed by preventable occupational disease.
        </p>
      </Card>

      {/* Disease Mechanism */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">How Silicosis Destroys Lungs</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Silicosis develops through a devastating biological process that begins when workers inhale microscopic crystalline silica particles. These particles, measuring less than 10 microns in diameter, penetrate deep into the lungs' alveoli where oxygen exchange occurs. Once embedded in lung tissue, these particles trigger an inflammatory cascade that ultimately leads to progressive scarring, respiratory failure, and often death.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Cellular Destruction Process</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Silica particles resist breakdown by immune cells</li>
              <li>• Macrophages die attempting to digest particles</li>
              <li>• Dead cells release inflammatory signals</li>
              <li>• Continuous cycle creates permanent scarring</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Disease Progression</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Chronic silicosis (10-30 years development)</li>
              <li>• Accelerated silicosis (5-10 years)</li>
              <li>• Acute silicosis (weeks to 5 years)</li>
              <li>• Progressive massive fibrosis</li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The modern engineered stone industry has created exposure conditions so severe that young workers are developing accelerated and acute forms at unprecedented rates. This is entirely preventable through proper workplace controls, yet companies continue prioritizing profits over worker safety.
        </p>
      </Card>

      {/* California's Silicosis Crisis */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">California's Stone Worker Crisis</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          California leads the nation in engineered stone countertop production, with hundreds of fabrication shops operating throughout the state. The concentration of Latino immigrant workers in this industry has created a humanitarian crisis, as employers exploit language barriers and immigration status to avoid implementing proper safety measures.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">High-Risk Areas</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Los Angeles County</li>
              <li>• Orange County</li>
              <li>• San Diego County</li>
              <li>• Riverside County</li>
              <li>• San Bernardino County</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Exposed Occupations</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Stone fabricators</li>
              <li>• Countertop installers</li>
              <li>• Construction workers</li>
              <li>• Tile setters</li>
              <li>• Concrete workers</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Legal Violations</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Inadequate ventilation</li>
              <li>• Missing respiratory protection</li>
              <li>• Lack of water suppression</li>
              <li>• No medical monitoring</li>
              <li>• Failure to train workers</li>
            </ul>
          </Card>
        </div>
      </Card>

      {/* Legal Strategy */}
      <Card className="content-card p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Our Comprehensive Legal Approach</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Drawing on our background defending employers and manufacturers, we now use insider knowledge to build winning cases for silicosis victims. We understand how defendants build their defenses and counter every strategy they employ.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Evidence Development</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Workplace exposure documentation</li>
              <li>• OSHA violation records</li>
              <li>• Medical record analysis</li>
              <li>• Expert witness coordination</li>
              <li>• Industry safety standard violations</li>
              <li>• Product liability claims</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Compensation Recovery</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Medical treatment costs</li>
              <li>• Lost wages and earning capacity</li>
              <li>• Pain and suffering damages</li>
              <li>• Lung transplant expenses</li>
              <li>• Family member losses</li>
              <li>• Punitive damages when applicable</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="content-card p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Diagnosed with Silicosis?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          Time is critical in silicosis cases due to the progressive nature of the disease and legal deadlines. Our experienced attorneys provide immediate consultation to protect your rights and pursue maximum compensation for this preventable tragedy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Immediate Legal Consultation
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Call (555) 123-4567
          </Button>
        </div>
      </Card>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default SilicosisInjuries;