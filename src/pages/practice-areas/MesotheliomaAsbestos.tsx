import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Phone, Users, Shield, Award, Clock, Heart, Star, ArrowRight } from 'lucide-react';

const MesotheliomaAsbestos: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              California Mesothelioma Lawyer
            </h1>
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="ml-3 text-xl">Backed by Decades of Experience</span>
            </div>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6 mb-8 font-bold"
            >
              START MY FREE CASE REVIEW
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-8 text-sm uppercase tracking-wider">
            <a href="#overview" className="hover:text-red-300 transition-colors border-b border-transparent hover:border-red-300">OVERVIEW</a>
            <a href="#steps" className="hover:text-red-300 transition-colors border-b border-transparent hover:border-red-300">STEPS TO TAKE</a>
            <a href="#faq" className="hover:text-red-300 transition-colors border-b border-transparent hover:border-red-300">FAQ</a>
            <a href="#related" className="hover:text-red-300 transition-colors border-b border-transparent hover:border-red-300">RELATED CASES</a>
          </nav>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - 2 Columns */}
            <div className="lg:col-span-2">
              {/* Overview Section */}
              <div id="overview" className="mb-16">
                <h2 className="text-4xl font-bold text-red-600 mb-6">Mesothelioma Attorneys</h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    For many California families, a mesothelioma diagnosis brings devastating news of aggressive cancer 
                    caused by asbestos exposure decades earlier. Mesothelioma can cause catastrophic damage to families 
                    – a fact that you know all too well if you or a loved one has been diagnosed with this disease. 
                    What's more, dealing with a mesothelioma claim while battling cancer can be an exhausting and 
                    time-consuming process for victims and their families.
                  </p>
                  <p>
                    Nevertheless, the good news is – if you or a loved one has been diagnosed with mesothelioma in 
                    California, you don't need to handle it alone. The help of experienced California mesothelioma 
                    lawyers can be just what you and your family need to secure the compensation you deserve while 
                    focusing on treatment and precious time together.
                  </p>
                  <p>
                    We are prepared to go the distance for our clients and our team is here for you 24/7.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Show More
                  </Button>
                </div>
              </div>

              {/* Steps to Take Section */}
              <div id="steps" className="mb-16">
                <h2 className="text-3xl font-bold mb-8">What to Do After a Mesothelioma Diagnosis</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white shadow-lg">
                    <div className="relative h-48 bg-gradient-to-br from-red-500 to-red-700 rounded-t-lg flex items-center justify-center">
                      <div className="text-white">
                        <div className="text-lg font-bold mb-2">Step 1</div>
                        <div className="text-2xl font-bold">Contact</div>
                        <div className="text-2xl font-bold">Mesothelioma</div>
                        <div className="text-2xl font-bold">Lawyers</div>
                      </div>
                    </div>
                  </Card>
                  <Card className="bg-white shadow-lg">
                    <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-t-lg flex items-center justify-center">
                      <div className="text-white">
                        <div className="text-lg font-bold mb-2">Step 2</div>
                        <div className="text-2xl font-bold">Let Us Get</div>
                        <div className="text-2xl font-bold">to Work</div>
                      </div>
                    </div>
                  </Card>
                  <Card className="bg-white shadow-lg">
                    <div className="relative h-48 bg-gradient-to-br from-green-500 to-green-700 rounded-t-lg flex items-center justify-center">
                      <div className="text-white">
                        <div className="text-lg font-bold mb-2">Step 3</div>
                        <div className="text-2xl font-bold">Rest, Recover,</div>
                        <div className="text-2xl font-bold">Receive Updates</div>
                      </div>
                    </div>
                  </Card>
                  <Card className="bg-white shadow-lg">
                    <div className="relative h-48 bg-gradient-to-br from-purple-500 to-purple-700 rounded-t-lg flex items-center justify-center">
                      <div className="text-white">
                        <div className="text-lg font-bold mb-2">Step 4</div>
                        <div className="text-2xl font-bold">Healing, Compensation,</div>
                        <div className="text-2xl font-bold">Peace of Mind</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Detailed Content Sections */}
              <div className="space-y-12">
                {/* Understanding Mesothelioma */}
                <Card className="bg-white p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Understanding Mesothelioma in California</h3>
                  <div className="prose prose-gray max-w-none space-y-4">
                    <p>
                      Mesothelioma is a rare and aggressive cancer that develops in the mesothelium, the protective 
                      lining surrounding the lungs (pleural mesothelioma), abdomen (peritoneal mesothelioma), or 
                      heart (pericardial mesothelioma). This devastating disease is almost exclusively caused by 
                      exposure to asbestos fibers, often occurring 20-50 years after initial exposure.
                    </p>
                    <p>
                      California has one of the highest rates of mesothelioma in the United States due to the 
                      state's extensive industrial history, military presence, and construction activity. Thousands 
                      of Californians were exposed to asbestos in shipyards, power plants, refineries, construction 
                      sites, and military installations throughout the 20th century.
                    </p>
                    
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 mt-6">
                      <h4 className="font-bold text-red-800 mb-3">Critical Facts About Mesothelioma:</h4>
                      <ul className="space-y-2 text-red-700">
                        <li>• Approximately 3,000 new cases diagnosed annually in the US</li>
                        <li>• 80% of cases are linked to occupational asbestos exposure</li>
                        <li>• Veterans account for 30% of all mesothelioma cases</li>
                        <li>• Median survival rate is 12-21 months</li>
                        <li>• California has over 500 documented asbestos exposure sites</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* California Exposure Sources */}
                <Card className="bg-white p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Major Asbestos Exposure Sources in California</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-red-600">Naval & Military Facilities</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Mare Island Naval Shipyard (Vallejo)</li>
                        <li>• Long Beach Naval Shipyard</li>
                        <li>• Naval Base San Diego</li>
                        <li>• Travis Air Force Base</li>
                        <li>• Camp Pendleton Marine Base</li>
                        <li>• Alameda Naval Air Station</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-red-600">Industrial & Power Plants</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Chevron Richmond Refinery</li>
                        <li>• Pacific Gas & Electric facilities</li>
                        <li>• Kaiser Steel Corporation</li>
                        <li>• General Electric plants</li>
                        <li>• Bethlehem Steel shipyard</li>
                        <li>• Southern California Edison</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-red-600">Construction & Trades</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Residential construction (1930s-1980s)</li>
                        <li>• Commercial building projects</li>
                        <li>• School construction statewide</li>
                        <li>• Hospital and medical facilities</li>
                        <li>• Renovation and demolition work</li>
                        <li>• Insulation and drywall installation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-red-600">Secondary Exposure</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Spouses washing contaminated clothing</li>
                        <li>• Children exposed to work clothes</li>
                        <li>• Family members in contaminated vehicles</li>
                        <li>• Environmental exposure near job sites</li>
                        <li>• Consumer products containing asbestos</li>
                        <li>• School teachers and staff</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Veterans Section */}
                <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Veterans Face Disproportionate Risk</h3>
                  </div>
                  <div className="prose prose-gray max-w-none space-y-4">
                    <p>
                      Military veterans represent the largest single group of mesothelioma victims, accounting for 
                      approximately 30% of all cases. California's extensive military presence during the peak 
                      asbestos-use period (1940s-1980s) put thousands of service members at risk.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      <div className="bg-white p-6 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-4">Available VA Benefits:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Disability compensation (up to 100%)</li>
                          <li>• Specialized medical treatment</li>
                          <li>• Dependency and Indemnity Compensation (DIC)</li>
                          <li>• Burial and cemetery benefits</li>
                          <li>• Vocational rehabilitation</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-4">Civil Litigation Benefits:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Pain and suffering compensation</li>
                          <li>• Punitive damages</li>
                          <li>• Asbestos trust fund claims</li>
                          <li>• Product liability lawsuits</li>
                          <li>• Wrongful death claims</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-6">
                      <p className="text-yellow-800 font-semibold">
                        Important: Veterans can pursue both VA benefits AND civil litigation simultaneously 
                        without affecting their military benefits.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Statistics Counter */}
              <div className="text-center py-12">
                <div className="text-6xl font-bold text-gray-400 mb-2">over</div>
                <div className="text-8xl font-bold text-red-600 mb-2">100,000</div>
                <div className="text-xl text-gray-600">clients served</div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="bg-gray-800 text-white sticky top-6">
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-t-lg">
                  <div className="w-full h-48 bg-gray-600 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <Phone className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm">Professional Consultation</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-4">3 Ways to <strong>Start Your Case</strong></h3>
                  <p className="text-sm mb-6 opacity-90">
                    You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                      Call (855) XXX-XXXX
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-gray-800" size="lg">
                      Email Us
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-gray-800" size="lg">
                      Calculate Settlement
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-600">
                    <p className="font-bold">No fees. No risk.</p>
                    <p className="text-sm opacity-90">You only pay when we win</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MesotheliomaAsbestos;