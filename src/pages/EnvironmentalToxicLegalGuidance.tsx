import React from 'react';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import heroBackground from '@/assets/environmental-toxic-legal-guidance-hero.jpg';

const EnvironmentalToxicLegalGuidance: React.FC = () => {
  const seo = {
    title: "Environmental Toxic Exposure Legal Guidance | California Attorney",
    description: "Expert legal guidance for environmental toxic exposure cases in California. Understanding your rights, legal process, and compensation options.",
    canonical: "/environmental-toxic-legal-guidance"
  };

  const hero = {
    backgroundImage: heroBackground,
    title: "Environmental Toxic Exposure Legal Guidance",
    subtitle: "Understanding Your Rights and Legal Options",
    description: "Comprehensive legal guidance for environmental contamination victims in California"
  };

  return (
    <ComprehensivePracticeAreaTemplate seo={seo} hero={hero}>
      <div className="space-y-12">
        <div className="content-card">
          <h2 className="text-3xl font-bold mb-6">Your Legal Rights in Environmental Toxic Exposure Cases</h2>
          <p className="text-lg mb-6">
            California law provides strong protections for victims of environmental toxic exposure. Understanding your rights 
            is crucial for protecting your family's health and securing fair compensation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Strict Liability Protection</h3>
              <p className="text-green-700">
                California holds polluters strictly liable for contamination, meaning you don't need to prove negligence - 
                only that contamination occurred and caused harm.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Discovery Rule</h3>
              <p className="text-blue-700">
                The statute of limitations begins when you discover both the injury and its connection to toxic exposure, 
                not when exposure first occurred.
              </p>
            </div>
          </div>
        </div>

        <div className="content-card">
          <h2 className="text-3xl font-bold mb-6">Types of Legal Claims</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">Personal Injury Claims</h3>
              <p className="mb-3">
                Compensation for health effects caused by toxic exposure, including cancer, neurological disorders, 
                reproductive harm, and other medical conditions.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Medical expenses (past and future)</li>
                <li>Lost wages and earning capacity</li>
                <li>Pain and suffering</li>
                <li>Medical monitoring costs</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">Property Damage Claims</h3>
              <p className="mb-3">
                Recovery for contamination affecting your property, including cleanup costs and diminished value.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cleanup and remediation costs</li>
                <li>Property value loss</li>
                <li>Alternative housing during cleanup</li>
                <li>Business interruption losses</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">Class Action Lawsuits</h3>
              <p className="mb-3">
                When contamination affects entire communities, class actions provide efficient resolution 
                while maintaining individual rights.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Community-wide contamination cases</li>
                <li>Shared litigation costs</li>
                <li>Consistent compensation standards</li>
                <li>Greater negotiating power</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-card">
          <h2 className="text-3xl font-bold mb-6">Legal Process Timeline</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">1</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Initial Consultation (Free)</h3>
                <p>We evaluate your case, explain your rights, and discuss legal options at no cost to you.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">2</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Investigation & Evidence Gathering</h3>
                <p>We conduct thorough investigation including environmental testing, medical record review, and expert consultation.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">3</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Filing Your Claim</h3>
                <p>We file strategic legal claims to maximize your recovery and protect your rights.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">4</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Discovery & Negotiation</h3>
                <p>We gather evidence, take depositions, and negotiate with responsible parties and their insurers.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 mt-1">5</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Resolution</h3>
                <p>Most cases settle through negotiation, but we're prepared for trial when necessary to achieve fair compensation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-card bg-yellow-50 border-yellow-200">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800">Important Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Personal Injury Claims</h3>
              <p className="text-sm">Generally 2 years from discovery of injury and its cause</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Property Damage Claims</h3>  
              <p className="text-sm">Generally 3 years from discovery of damage</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Government Claims</h3>
              <p className="text-sm">6 months for claims against government entities</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Wrongful Death Claims</h3>
              <p className="text-sm">2 years from date of death</p>
            </div>
          </div>
          <p className="text-yellow-700 text-sm mt-4">
            <strong>Act Now:</strong> Deadlines vary by case type and circumstances. Contact us immediately to preserve your rights.
          </p>
        </div>
      </div>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default EnvironmentalToxicLegalGuidance;