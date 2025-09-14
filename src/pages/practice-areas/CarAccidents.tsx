import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CarAccidents = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🚗</div>
            <h1 className="text-display font-display font-bold text-foreground mb-6">
              Car Accident Legal Representation
            </h1>
            <p className="text-xl text-muted-foreground">
              California's congested highways see thousands of serious crashes annually
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Common Car Accident Types</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>• Rear-end collisions</li>
                <li>• Head-on crashes</li>
                <li>• Side-impact accidents</li>
                <li>• Multi-vehicle pile-ups</li>
                <li>• Hit-and-run incidents</li>
                <li>• Intersection accidents</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Insurance Company Tactics</h2>
              <p className="text-muted-foreground mb-4">
                Our former defense experience reveals insurance company tactics used to minimize payouts.
              </p>
              <p className="text-muted-foreground">
                We know how to counter these strategies and secure maximum compensation for our clients.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Been in a Car Accident?</h2>
            <p className="text-muted-foreground mb-8">
              Don't let insurance companies take advantage of you. Get experienced legal representation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Free Case Review
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarAccidents;