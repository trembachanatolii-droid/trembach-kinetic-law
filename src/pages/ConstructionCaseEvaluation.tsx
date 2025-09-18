import React from 'react';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HardHat, FileText, Clock } from 'lucide-react';
import heroImage from '@/assets/construction-case-evaluation-hero.jpg';

const ConstructionCaseEvaluation: React.FC = () => {
  return (
    <ComprehensivePracticeAreaTemplate
      seo={{
        title: "Free Construction Accident Case Evaluation | California Attorney",
        description: "Get a free construction accident case evaluation. Former defense attorney evaluating OSHA violations, third-party liability, and maximum compensation potential.",
        canonical: "https://trembachlawfirm.com/construction-case-evaluation"
      }}
      hero={{
        backgroundImage: heroImage,
        title: "Construction Accident Case Evaluation",
        subtitle: "Free Assessment of Your Construction Accident Claim",
        description: "Our former defense attorney provides comprehensive case evaluations for construction accidents, identifying all liable parties and maximum compensation potential through third-party claims beyond workers' compensation."
      }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="content-card p-8">
          <HardHat className="w-12 h-12 text-primary mb-6" />
          <h2 className="text-3xl font-bold mb-6">Construction Accident Evaluation Process</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Accident Analysis</h3>
                <p className="text-muted-foreground">Detailed review of accident circumstances, safety violations, and liable parties.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">OSHA Violation Assessment</h3>
                <p className="text-muted-foreground">Identification of safety standard violations strengthening your claim.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Compensation Evaluation</h3>
                <p className="text-muted-foreground">Calculation of potential recovery from all available sources beyond workers' comp.</p>
              </div>
            </div>
          </div>
          
          <Button className="w-full mt-8" size="lg">
            Start Free Evaluation
          </Button>
        </Card>

        <Card className="content-card p-8">
          <Clock className="w-12 h-12 text-primary mb-6" />
          <h2 className="text-3xl font-bold mb-6">What We Evaluate</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <FileText className="w-5 h-5 text-primary mr-3" />
              Third-party liability potential
            </li>
            <li className="flex items-center">
              <FileText className="w-5 h-5 text-primary mr-3" />
              OSHA and Cal/OSHA violations
            </li>
            <li className="flex items-center">
              <FileText className="w-5 h-5 text-primary mr-3" />
              Equipment manufacturer defects
            </li>
            <li className="flex items-center">
              <FileText className="w-5 h-5 text-primary mr-3" />
              Contractor safety failures
            </li>
            <li className="flex items-center">
              <FileText className="w-5 h-5 text-primary mr-3" />
              Property owner negligence
            </li>
            <li className="flex items-center">
              <FileText className="w-5 h-5 text-primary mr-3" />
              Available insurance coverage
            </li>
          </ul>
          
          <div className="mt-8 p-6 bg-primary/5 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Free Consultation</h3>
            <p className="text-muted-foreground">No fees unless we win your case. Available 24/7 for emergency evaluations.</p>
          </div>
        </Card>
      </div>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default ConstructionCaseEvaluation;