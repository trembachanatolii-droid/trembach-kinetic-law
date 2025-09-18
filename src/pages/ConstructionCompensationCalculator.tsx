import React from 'react';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, DollarSign } from 'lucide-react';
import heroImage from '@/assets/construction-compensation-calculator-hero.jpg';

const ConstructionCompensationCalculator: React.FC = () => {
  return (
    <ComprehensivePracticeAreaTemplate
      seo={{
        title: "Construction Accident Compensation Calculator | California",
        description: "Calculate potential construction accident compensation beyond workers' comp. Free assessment of third-party claims, OSHA violations, and maximum recovery.",
        canonical: "https://trembachlawfirm.com/construction-compensation-calculator"
      }}
      hero={{
        backgroundImage: heroImage,
        title: "Construction Accident Compensation Calculator",
        subtitle: "Estimate Your Potential Recovery Beyond Workers' Compensation",
        description: "Calculate potential compensation from construction accidents including third-party claims, OSHA violations, and equipment defects. Our calculator helps estimate recovery from all liable parties beyond limited workers' compensation benefits."
      }}
    >
      <Card className="content-card p-8">
        <Calculator className="w-12 h-12 text-primary mb-6" />
        <h2 className="text-3xl font-bold mb-6">Construction Accident Compensation Calculator</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Compensation Categories</h3>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Medical Expenses</h4>
                <p className="text-sm text-muted-foreground">All past and future medical costs, rehabilitation, medications, and assistive devices.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Lost Wages</h4>
                <p className="text-sm text-muted-foreground">100% of lost income including overtime, bonuses, and benefits without workers' comp caps.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Pain & Suffering</h4>
                <p className="text-sm text-muted-foreground">Compensation for physical pain, emotional distress, and loss of life enjoyment.</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Future Earning Loss</h4>
                <p className="text-sm text-muted-foreground">Reduced earning capacity if unable to return to construction work.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Factors Affecting Value</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <DollarSign className="w-5 h-5 text-primary mr-2" />
                Severity of injuries
              </li>
              <li className="flex items-center">
                <DollarSign className="w-5 h-5 text-primary mr-2" />
                OSHA violations present
              </li>
              <li className="flex items-center">
                <DollarSign className="w-5 h-5 text-primary mr-2" />
                Number of liable parties
              </li>
              <li className="flex items-center">
                <DollarSign className="w-5 h-5 text-primary mr-2" />
                Available insurance coverage
              </li>
              <li className="flex items-center">
                <DollarSign className="w-5 h-5 text-primary mr-2" />
                Strength of negligence evidence
              </li>
              <li className="flex items-center">
                <DollarSign className="w-5 h-5 text-primary mr-2" />
                Age and earning history
              </li>
            </ul>
            
            <div className="mt-8 p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-destructive">Important Note</h4>
              <p className="text-sm">This calculator provides estimates only. Actual compensation depends on specific case facts, evidence, and legal complexities.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Get Accurate Case Valuation
          </Button>
        </div>
      </Card>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default ConstructionCompensationCalculator;