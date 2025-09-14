import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const TruckAccidents = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🚛</div>
            <h1 className="text-display font-display font-bold text-foreground mb-6">
              Truck & 18-Wheeler Accident Lawyers
            </h1>
            <p className="text-xl text-muted-foreground">
              Commercial truck crashes cause catastrophic injuries due to size and weight disparities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Complex Liability Issues</h2>
              <p className="text-muted-foreground mb-4">
                Truck accidents involve multiple parties and federal regulations that create complex liability scenarios.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Trucking company liability</li>
                <li>• Driver negligence</li>
                <li>• Maintenance company responsibility</li>
                <li>• Cargo loading errors</li>
                <li>• Equipment manufacturer defects</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Federal Regulations</h2>
              <p className="text-muted-foreground mb-4">
                Commercial trucks must follow strict federal safety regulations including:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Hours of service limits</li>
                <li>• Vehicle inspection requirements</li>
                <li>• Driver qualification standards</li>
                <li>• Load securement rules</li>
                <li>• Electronic logging devices</li>
              </ul>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Injured in a Truck Accident?</h2>
            <p className="text-muted-foreground mb-8">
              Time is critical in preserving evidence. Contact our experienced truck accident attorneys immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Immediate Consultation
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

export default TruckAccidents;