import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const MedicalMalpractice = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">⚕️</div>
            <h1 className="text-display font-display font-bold text-foreground mb-6">
              Medical Malpractice Attorneys
            </h1>
            <p className="text-xl text-muted-foreground">
              Healthcare providers must meet professional standards of care
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Common Malpractice Cases</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>• Misdiagnosis or delayed diagnosis</li>
                <li>• Surgical errors and complications</li>
                <li>• Medication errors and adverse reactions</li>
                <li>• Birth injuries and obstetric negligence</li>
                <li>• Anesthesia errors</li>
                <li>• Hospital-acquired infections</li>
                <li>• Failure to obtain informed consent</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Proving Medical Negligence</h2>
              <p className="text-muted-foreground mb-4">
                Medical malpractice cases require proving that healthcare providers failed to meet the standard of care.
              </p>
              <p className="text-muted-foreground">
                We work with medical experts to demonstrate how negligence caused preventable harm and complications.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Victim of Medical Negligence?</h2>
            <p className="text-muted-foreground mb-8">
              Medical malpractice cases have strict time limits. Contact us immediately for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Free Case Evaluation
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

export default MedicalMalpractice;