import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PracticeAreaTemplateProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  additionalInfo?: string;
  callToAction: string;
  children?: React.ReactNode;
}

const PracticeAreaTemplate: React.FC<PracticeAreaTemplateProps> = ({
  icon,
  title,
  subtitle,
  description,
  keyPoints,
  additionalInfo,
  callToAction,
  children
}) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">{icon}</div>
            <h1 className="text-display font-display font-bold text-foreground mb-6">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {subtitle}
            </p>
          </div>

          <Card className="p-8 mb-12">
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {description}
            </p>
            
            {keyPoints.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Key Areas We Handle:</h2>
                <ul className="text-muted-foreground space-y-2">
                  {keyPoints.map((point, index) => (
                    <li key={index}>• {point}</li>
                  ))}
                </ul>
              </div>
            )}

            {additionalInfo && (
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-muted-foreground leading-relaxed">
                  {additionalInfo}
                </p>
              </div>
            )}
          </Card>

          {children}

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">{callToAction}</h2>
            <p className="text-muted-foreground mb-8">
              Don't wait - contact our experienced attorneys for immediate legal assistance.
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

export default PracticeAreaTemplate;