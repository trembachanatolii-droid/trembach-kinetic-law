import React from 'react';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Phone, Mail, AlertTriangle, FileText, Building, Users } from 'lucide-react';
import heroBackground from '@/assets/environmental-toxic-resources-hero.jpg';

const EnvironmentalToxicResources: React.FC = () => {
  const seo = {
    title: "Environmental Toxic Exposure Resources | California Support & Information",
    description: "Comprehensive resources for environmental toxic exposure victims in California. Emergency contacts, support services, and educational materials.",
    canonical: "/environmental-toxic-resources"
  };

  const hero = {
    backgroundImage: heroBackground,
    title: "Environmental Toxic Exposure Resources",
    subtitle: "Support, Information, and Emergency Contacts",
    description: "Comprehensive resources and support for toxic exposure victims and their families"
  };

  return (
    <ComprehensivePracticeAreaTemplate seo={seo} hero={hero}>
      <div className="space-y-12">
        {/* Emergency Resources */}
        <div className="content-card bg-red-50 border-red-200">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-red-800">Emergency Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-red-300">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  24/7 Legal Emergency Line
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600 mb-4">
                  If you're experiencing immediate health effects from toxic exposure or discovered new contamination:
                </p>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  Call (818) 123-4567
                </Button>
              </CardContent>
            </Card>

            <Card className="border-red-300">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Poison Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600 mb-4">
                  For immediate poisoning or chemical exposure emergencies:
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-red-300 text-red-700 hover:bg-red-50"
                  onClick={() => window.location.href = 'tel:18002221222'}
                >
                  1-800-222-1222
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Legal Resources */}
        <div className="content-card">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-blue-800">Legal Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-700">Case Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Get a free, confidential assessment of your toxic exposure case.</p>
                <Button 
                  className="w-full"
                  onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
                >
                  Start Evaluation
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-700">Compensation Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Estimate potential compensation for your case.</p>
                <Button 
                  className="w-full"
                  onClick={() => window.location.href = '/environmental-toxic-compensation-calculator'}
                >
                  Calculate Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-700">Legal Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Understand your rights and the legal process.</p>
                <Button 
                  className="w-full"
                  onClick={() => window.location.href = '/environmental-toxic-legal-guidance'}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Government Agencies */}
        <div className="content-card">
          <div className="flex items-center mb-6">
            <Building className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-green-800">Government Agencies & Reporting</h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">California DTSC</h3>
                <p className="text-sm mb-3">Department of Toxic Substances Control - Regulates hazardous waste and contaminated sites</p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.open('https://dtsc.ca.gov', '_blank')}
                    className="w-full justify-start"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit DTSC Website
                  </Button>
                  <p className="text-xs text-gray-600">Report contamination: 1-800-698-6942</p>
                </div>
              </div>

              <div className="border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">EPA Region 9</h3>
                <p className="text-sm mb-3">Federal environmental protection for California, Nevada, Arizona, Hawaii</p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.open('https://epa.gov/aboutepa/epa-region-9-pacific-southwest', '_blank')}
                    className="w-full justify-start"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit EPA Region 9
                  </Button>
                  <p className="text-xs text-gray-600">Report violations: 1-800-300-1213</p>
                </div>
              </div>

              <div className="border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Regional Water Boards</h3>
                <p className="text-sm mb-3">Protect water quality and investigate contamination throughout California</p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.open('https://waterboards.ca.gov', '_blank')}
                    className="w-full justify-start"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Find Your Regional Board
                  </Button>
                  <p className="text-xs text-gray-600">Report water contamination</p>
                </div>
              </div>

              <div className="border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">CalEPA</h3>
                <p className="text-sm mb-3">California Environmental Protection Agency - State environmental oversight</p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.open('https://calepa.ca.gov', '_blank')}
                    className="w-full justify-start"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit CalEPA
                  </Button>
                  <p className="text-xs text-gray-600">Environmental complaint hotline</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Services */}
        <div className="content-card">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-purple-800">Support Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-purple-800">Medical Support</h3>
              <ul className="space-y-2 text-sm">
                <li>• Environmental medicine specialists</li>
                <li>• Medical monitoring programs</li>
                <li>• Health screening resources</li>
                <li>• Treatment referrals</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-purple-800">Community Support</h3>
              <ul className="space-y-2 text-sm">
                <li>• Victim support groups</li>
                <li>• Community organization resources</li>
                <li>• Environmental justice advocacy</li>
                <li>• Family counseling services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Educational Resources */}
        <div className="content-card">
          <h2 className="text-3xl font-bold mb-6">Educational Resources</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Understanding Toxic Chemicals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">PFAS "Forever Chemicals"</h4>
                  <p className="text-sm text-gray-600">Learn about the most persistent environmental contaminants</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Industrial Solvents</h4>
                  <p className="text-sm text-gray-600">TCE, PCE, and other workplace chemicals causing harm</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Heavy Metals</h4>
                  <p className="text-sm text-gray-600">Lead, mercury, chromium contamination sources and effects</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Pesticides & Herbicides</h4>
                  <p className="text-sm text-gray-600">Agricultural and residential chemical exposures</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Health Effects Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Cancer Risks</h4>
                  <p className="text-sm text-gray-600">Understanding environmental carcinogens and cancer development</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reproductive Health</h4>
                  <p className="text-sm text-gray-600">Effects on fertility, pregnancy, and child development</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Neurological Impacts</h4>
                  <p className="text-sm text-gray-600">Brain and nervous system effects of toxic exposure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="content-card bg-blue-50 border-blue-200">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Get Professional Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Free Legal Consultation</h3>
              <p className="text-sm mb-4">
                Don't navigate this complex process alone. Our experienced environmental attorneys provide free, 
                confidential consultations to evaluate your case and explain your options.
              </p>
              <div className="space-y-2">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (818) 123-4567
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-300"
                  onClick={() => window.location.href = 'mailto:contact@lawfirm.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">What We Provide</h3>
              <ul className="text-sm space-y-2">
                <li>• Free case evaluation and legal advice</li>
                <li>• No upfront costs or attorney fees</li>
                <li>• Comprehensive investigation and testing</li>
                <li>• Expert medical and scientific witnesses</li>
                <li>• Maximum compensation pursuit</li>
                <li>• Support throughout the legal process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ComprehensivePracticeAreaTemplate>
  );
};

export default EnvironmentalToxicResources;