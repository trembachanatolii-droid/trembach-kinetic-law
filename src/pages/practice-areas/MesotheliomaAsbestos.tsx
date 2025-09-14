import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const MesotheliomaAsbestos = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🫁</div>
            <h1 className="text-display font-display font-bold text-foreground mb-6">
              Mesothelioma & Asbestos Legal Help
            </h1>
            <p className="text-xl text-muted-foreground">
              Aggressive representation for asbestos cancer victims throughout California
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Understanding Mesothelioma</h2>
              <p className="text-muted-foreground mb-4">
                Mesothelioma is a rare and aggressive cancer caused exclusively by asbestos exposure. 
                This cancer affects the protective lining around organs, most commonly the lungs.
              </p>
              <p className="text-muted-foreground">
                We trace exposure histories from military service, shipyards, construction sites, 
                and consumer products to build strong cases for our clients.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Common Exposure Sources</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>• Military service (Navy ships, Air Force bases)</li>
                <li>• Shipyards and maritime industries</li>
                <li>• Construction and demolition work</li>
                <li>• Industrial manufacturing facilities</li>
                <li>• Consumer products (insulation, brake pads)</li>
                <li>• Secondary exposure through family members</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Choose Our Firm</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-semibold mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground text-sm">
                  Decades of experience securing maximum compensation for mesothelioma victims
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">No Upfront Costs</h3>
                <p className="text-muted-foreground text-sm">
                  We work on contingency - you pay nothing unless we win your case
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Compassionate Support</h3>
                <p className="text-muted-foreground text-sm">
                  We understand the urgency and provide dedicated personal attention
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Get Your Free Case Evaluation</h2>
            <p className="text-muted-foreground mb-8">
              Time is critical in mesothelioma cases. Contact us today for immediate legal assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Call Now: (555) 123-4567
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Free Online Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesotheliomaAsbestos;