import React from 'react';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import heroBackground from '@/assets/environmental-toxic-case-evaluation-hero.jpg';

const EnvironmentalToxicCaseEvaluation: React.FC = () => {
  const seo = {
    title: "Environmental Toxic Exposure Case Evaluation | Free Consultation",
    description: "Get a free case evaluation for environmental toxic exposure. Expert legal assessment of PFAS, TCE, chemical contamination claims in California.",
    canonical: "/environmental-toxic-case-evaluation"
  };

  const hero = {
    backgroundImage: heroBackground,
    title: "Environmental Toxic Exposure Case Evaluation",
    subtitle: "Get Your Free Legal Assessment Today",
    description: "Expert evaluation of your toxic exposure case with no upfront costs"
  };

  return (
    <ComprehensivePracticeAreaTemplate seo={seo} hero={hero}>
      <div className="space-y-12">
        <div className="content-card">
          <h2 className="text-3xl font-bold mb-6">Free Environmental Toxic Exposure Evaluation</h2>
          <p className="text-lg mb-6">
            If you've been exposed to toxic chemicals, we're here to help evaluate your case at no cost to you.
            Our experienced team will assess your exposure, health impacts, and legal options.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">What We'll Evaluate:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your exposure history and contamination sources</li>
              <li>Health effects and medical documentation</li>
              <li>Property damage and environmental impacts</li>
              <li>Potential compensation and legal remedies</li>
              <li>Statute of limitations and filing deadlines</li>
            </ul>
          </div>
        </div>
      </div>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default EnvironmentalToxicCaseEvaluation;