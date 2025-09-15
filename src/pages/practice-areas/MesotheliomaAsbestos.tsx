import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Phone, Users, Shield, Award, Clock, Heart } from 'lucide-react';

const MesotheliomaAsbestos: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-red-600/10 text-red-400 border-red-500/30">
                <Clock className="w-4 h-4 mr-2" />
                Time-Sensitive Legal Matter
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Mesothelioma & Asbestos
                <span className="text-red-400"> Legal Help</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                California's mesothelioma crisis demands immediate legal action when this devastating cancer strikes. Our specialized mesothelioma attorneys understand the unique challenges facing victims throughout Southern California.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (800) 555-0123
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Free Case Review
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Award className="w-12 h-12 text-red-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold">$30M+</div>
                  <div className="text-slate-300">Recent Verdicts</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-red-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-slate-300">Families Helped</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-red-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-slate-300">Available</div>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-red-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold">No Win</div>
                  <div className="text-slate-300">No Fee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Critical Information Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center text-center">
            <Heart className="w-5 h-5 mr-3 animate-pulse" />
            <p className="font-semibold">
              Mesothelioma patients face 12-21 month survival rates. Time is critical for compensation and treatment.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content - Left 2 Columns */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding Mesothelioma */}
            <section>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Understanding Mesothelioma in California
              </h2>
              <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                <p className="text-xl leading-relaxed">
                  Mesothelioma develops 20-50 years after asbestos exposure, often catching victims during retirement when medical costs overwhelm fixed incomes. This aggressive cancer attacks the protective lining of lungs, heart, or abdomen, with most patients facing 12-21 month survival rates.
                </p>
                <p>
                  California's extensive military installations, shipbuilding industry, construction boom, and manufacturing sector created widespread exposure affecting thousands of workers who trusted their employers to provide safe working conditions.
                </p>
              </div>
            </section>

            {/* California Exposure Sources */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                California's High-Risk Exposure Sites
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-l-red-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Naval & Military</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Long Beach Naval Shipyard</li>
                    <li>• Mare Island Naval Shipyard</li>
                    <li>• Hunters Point Naval Shipyard</li>
                    <li>• Camp Pendleton Marine Base</li>
                    <li>• Naval Base San Diego</li>
                  </ul>
                </Card>
                <Card className="p-6 border-l-4 border-l-red-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Industrial Sites</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Los Angeles refineries</li>
                    <li>• San Francisco Bay shipbuilding</li>
                    <li>• Richmond oil refineries</li>
                    <li>• Power plants statewide</li>
                    <li>• Aerospace manufacturing</li>
                  </ul>
                </Card>
                <Card className="p-6 border-l-4 border-l-red-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Construction Trades</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Insulators and pipefitters</li>
                    <li>• Electricians and boilermakers</li>
                    <li>• Construction sites (1930s-1980s)</li>
                    <li>• Maintenance workers</li>
                    <li>• Building demolition</li>
                  </ul>
                </Card>
                <Card className="p-6 border-l-4 border-l-red-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Secondary Exposure</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Family members washing work clothes</li>
                    <li>• Children playing with asbestos bags</li>
                    <li>• Office workers in contaminated buildings</li>
                    <li>• Ambient exposure near job sites</li>
                    <li>• Take-home contamination</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Veterans Section */}
            <section className="bg-slate-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-900">
                  Veterans Face Disproportionate Risk
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
                Navy personnel experience the highest exposure rates from shipboard asbestos insulation, engine rooms, and sleeping quarters. We assist veterans navigating both VA benefits and civil litigation, ensuring maximum recovery from all sources.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">VA Benefits Available:</h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Disability compensation</li>
                    <li>• Healthcare benefits</li>
                    <li>• Dependency benefits</li>
                    <li>• Burial benefits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Civil Litigation Benefits:</h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Pain and suffering damages</li>
                    <li>• Punitive damages</li>
                    <li>• Trust fund recoveries</li>
                    <li>• Settlement negotiations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compensation Sources */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Multiple Compensation Sources Available
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                California law provides multiple compensation avenues. We pursue all available sources simultaneously, often recovering from dozens of defendants who manufactured, distributed, or specified asbestos products.
              </p>
              
              <div className="grid gap-6">
                <Card className="p-6 bg-gradient-to-r from-red-50 to-white border border-red-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Asbestos Trust Funds</h3>
                  <p className="text-slate-600 mb-4">
                    Trust funds established by bankrupt asbestos companies contain billions in compensation. Many clients receive multiple trust payments while pursuing litigation against solvent defendants.
                  </p>
                  <Badge variant="outline" className="text-red-600 border-red-300">
                    Billions Available in Trust Funds
                  </Badge>
                </Card>

                <Card className="p-6 bg-gradient-to-r from-slate-50 to-white">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Injury Lawsuits</h3>
                  <p className="text-slate-600 mb-4">
                    California's favorable legal climate includes extended statutes of limitations, strict liability for manufacturers, and strong consumer protection laws.
                  </p>
                  <Badge variant="outline" className="text-slate-600">
                    Recent Verdicts Exceeding $30 Million
                  </Badge>
                </Card>

                <Card className="p-6 bg-gradient-to-r from-blue-50 to-white border border-blue-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Workers' Compensation & VA Benefits</h3>
                  <p className="text-slate-600 mb-4">
                    Additional compensation available through workers' comp and veteran's benefits, pursued simultaneously with civil litigation.
                  </p>
                  <Badge variant="outline" className="text-blue-600 border-blue-300">
                    Dual Recovery Available
                  </Badge>
                </Card>
              </div>
            </section>

            {/* Treatment Information */}
            <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Advanced Medical Treatment Options
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-red-400 mb-4">Surgical Options</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Extrapleural pneumonectomy</li>
                    <li>• Pleurectomy/decortication</li>
                    <li>• Heated intraperitoneal chemotherapy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-400 mb-4">Emerging Treatments</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Immunotherapy clinical trials</li>
                    <li>• Targeted therapy drugs</li>
                    <li>• Photodynamic therapy</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-slate-300">
                Our relationships with leading oncologists at UCLA, UCSF, and Scripps help ensure clients receive information about cutting-edge treatment options while we handle legal battles.
              </p>
            </section>

            {/* Time Critical Notice */}
            <section className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-900">
                  Time Remains Critical
                </h2>
              </div>
              <p className="text-red-800 text-lg mb-4">
                Evidence disappears, witnesses pass away, and statutes of limitations expire. California generally allows one year from diagnosis for personal injury claims and one year from death for wrongful death actions.
              </p>
              <p className="text-red-700">
                Immediate legal consultation ensures preservation of rights and evidence while families focus on medical treatment and precious time together.
              </p>
            </section>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-8">
            <Card className="p-8 shadow-2xl border-red-200 bg-gradient-to-b from-white to-red-50">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Free Case Evaluation
              </h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-slate-600 mb-4">
                    Immediate legal action required. California's statutes of limitations are strict.
                  </p>
                  
                  <div className="bg-red-600 text-white p-6 rounded-xl mb-6">
                    <p className="font-semibold mb-2">Call Now for Immediate Help</p>
                    <p className="text-3xl font-bold mb-2">(800) 555-0123</p>
                    <p className="text-red-100 text-sm">Available 24/7 • No Obligation</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold shadow-lg"
                    size="lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Your Free Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-50 py-4 text-lg shadow-md"
                    size="lg"
                  >
                    Chat Online Now
                  </Button>
                </div>
                
                <Separator className="my-6" />
                
                <div className="text-center space-y-3">
                  <p className="font-semibold text-slate-900">Why Choose Our Firm:</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>✓ 30+ Years Asbestos Experience</li>
                    <li>✓ $500M+ Recovered for Clients</li>
                    <li>✓ No Fee Unless We Win</li>
                    <li>✓ Nationwide Resources</li>
                    <li>✓ Compassionate Support</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Economic Damages */}
            <Card className="p-6 bg-gradient-to-b from-slate-50 to-white">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Economic Damages Include:</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Past and future medical expenses</li>
                <li>• Lost wages and benefits</li>
                <li>• Household services value</li>
                <li>• Travel expenses for treatment</li>
                <li>• Caregiver compensation</li>
              </ul>
            </Card>

            {/* Testimonial */}
            <Card className="p-6 bg-gradient-to-b from-blue-50 to-white border border-blue-200">
              <blockquote className="text-slate-700 italic mb-4">
                "They fought tirelessly for our family during the most difficult time of our lives. The settlement allows us to focus on Dad's treatment and spend precious time together."
              </blockquote>
              <footer className="text-sm text-slate-500">
                — Susan M., Client Family Member
              </footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesotheliomaAsbestos;